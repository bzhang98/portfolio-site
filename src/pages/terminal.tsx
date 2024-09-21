import TerminalInput from "@/components/terminal-input";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedText from "@/components/animated-text";
import { createHangman, HangmanGame } from "../hangman/hangman";
import HangmanCanvas from "@/hangman/hangman-canvas";
import { createWordleGame, WordleGame } from "@/wordle/wordle";
import { possibleWords } from "@/wordle/possible-words";
import { AnimatePresence, motion } from "framer-motion";

function PreviousCommand({ command }: { command: string }) {
  return (
    <div className="user-input">
      <span>guest@https://brzh.dev/terminal $ </span>
      <p className="inline-block">{command}</p>
    </div>
  );
}

interface Command {
  command: { mainCommand: string; args: string[] };
  output: string | JSX.Element;
}

export default function Terminal() {
  const [isLoading, setIsLoading] = useState(true);

  const [previousCommands, setPreviousCommands] = useState<Command[]>([]);
  const [lastLogin] = useState<string>(localStorage.getItem("lastLogin") || "");

  const outputRef = useRef(null);

  const navigate = useNavigate();

  const [hangmanGame, setHangmanGame] = useState<HangmanGame | null>(null);
  const [wordleGame, setWordleGame] = useState<WordleGame | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [previousCommands]);

  useEffect(() => {
    const now = new Date().toLocaleString();
    localStorage.setItem("lastLogin", now);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  function processCommand(command: string) {
    const [mainCommand, ...args] = command.split(" "); // Split command into main command and arguments
    switch (mainCommand) {
      case "":
        break;

      case "help":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command: { mainCommand, args },
            output: (
              <div>
                <p>Available commands:</p>
                <ul>
                  <li>
                    <span className="text-green-500">help</span> - Show this
                    help message
                  </li>
                  <li>
                    <span className="text-green-500">clear</span> - Clear the
                    terminal
                  </li>
                  <li>
                    <span className="text-green-500">date</span> - Show the
                    current date and time
                  </li>
                  <li>
                    <span className="text-green-500">source</span> - see the
                    source code for this website on github
                  </li>
                  <li>
                    <span className="text-green-500">resume</span> - view my
                    resume
                  </li>
                  <li>
                    <span className="text-green-500">exit</span> - return to the
                    main site
                  </li>
                  <li>
                    <span className="text-green-500">echo</span>{" "}
                    <span className="text-pink-500">[text]</span> - display the
                    text on the screen
                  </li>
                  <li>
                    <span className="text-green-500">hangman</span>{" "}
                    <span className="text-pink-500">start</span> - start a game
                    of hangman
                  </li>
                  <li>
                    <span className="text-green-500">wordle</span>{" "}
                    <span className="text-pink-500">start</span> - start a game
                    of wordle
                  </li>
                </ul>
              </div>
            ),
          },
        ]);
        break;

      case "clear":
        setPreviousCommands([]);
        break;

      case "date":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command: { mainCommand, args },
            output: new Date().toLocaleString(),
          },
        ]);
        break;

      case "source":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command: { mainCommand, args },
            output: (
              <AnimatedText
                text="Opening GitHub repository..."
                duration={1.5}
              />
            ),
          },
        ]);
        setTimeout(() => {
          window.open("https://github.com/bzhang98/portfolio-site");
        }, 2000);
        break;

      case "resume":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command: { mainCommand, args },
            output: <AnimatedText text="Opening resume..." duration={1.5} />,
          },
        ]);
        setTimeout(() => {
          window.open(
            "https://docs.google.com/document/d/1tpKiwA99oj27TdVLMgwVC6YfjW9b9CW4ch9A3cxqhm4/edit?usp=sharing"
          );
        }, 2000);
        break;

      case "exit":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command: { mainCommand, args },
            output: (
              <AnimatedText
                text="Taking you back to the main site..."
                duration={1}
              />
            ),
          },
        ]);
        setTimeout(() => {
          navigate("/");
        }, 2000);
        break;

      case "echo":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command: { mainCommand, args },
            output: args.join(" "),
          },
        ]);
        break;

      case "history":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command: { mainCommand, args },
            output: (
              <>
                <p>Command History:</p>
                <ul>
                  {prev.map((cmd) => (
                    <li
                      key={cmd.command.mainCommand + cmd.command.args.join(" ")}
                    >
                      {cmd.command.mainCommand + cmd.command.args.join(" ")}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
        ]);
        break;

      case "hangman":
        if (args[0] === "start") {
          const newGame = createHangman();
          setHangmanGame(newGame);
          const output = newGame.start();
          setPreviousCommands((prev) => [
            ...prev,
            { command: { mainCommand, args }, output },
          ]);
        } else if (args[0] === "exit" && hangmanGame) {
          setHangmanGame(null);
          setPreviousCommands((prev) => [
            ...prev,
            {
              command: { mainCommand, args },
              output: "Hangman game exited",
            },
          ]);
        } else if (args[0] === "progress" && hangmanGame) {
          const output = (
            <>
              <p>Word: {hangmanGame.getWordProgress()}</p>
              <p>
                Guessed letters: {hangmanGame.getGuessedLetters().join(", ")}
              </p>
              <p>Remaining guesses: {hangmanGame.getRemainingGuesses()}</p>
              <HangmanCanvas stage={hangmanGame.getRemainingGuesses()} />
            </>
          );
          setPreviousCommands((prev) => [
            ...prev,
            { command: { mainCommand, args }, output },
          ]);
        } else if (args[0] && args[0].length === 1 && hangmanGame) {
          const output = hangmanGame.guess(args[0]);
          setPreviousCommands((prev) => [
            ...prev,
            {
              command: { mainCommand, args },
              output: (
                <>
                  {output}
                  <HangmanCanvas stage={hangmanGame.getRemainingGuesses()} />
                </>
              ),
            },
          ]);
          if (hangmanGame.isGameOver()) {
            setHangmanGame(null);
          }
        } else if (!hangmanGame) {
          setPreviousCommands((prev) => [
            ...prev,
            {
              command: { mainCommand, args },
              output:
                "No Hangman game in progress. Start with 'hangman start'.",
            },
          ]);
        } else {
          setPreviousCommands((prev) => [
            ...prev,
            {
              command: { mainCommand, args },
              output: (
                <>
                  <p>Hangman game in progress</p>
                  <p>Valid commands:</p>
                  <ul>
                    <li>
                      <span className="text-green-500">hangman </span>
                      <span className="text-pink-500">start</span> - Start a new
                      game
                    </li>
                    <li>
                      <span className="text-green-500">hangman </span>
                      <span className="text-pink-500">exit</span> - Exit the
                      current game
                    </li>
                    <li>
                      <span className="text-green-500">hangman </span>
                      <span className="text-pink-500">[letter]</span> - Guess a
                      letter
                    </li>
                    <li>
                      <span className="text-green-500">hangman </span>
                      <span className="text-pink-500">progress</span> - Show the
                      current word progress, guessed letters, and remaining
                      guesses
                    </li>
                  </ul>
                </>
              ),
            },
          ]);
        }
        break;

      case "wordle":
        if (args[0] === "start") {
          const randomWord =
            possibleWords[Math.floor(Math.random() * possibleWords.length)];
          const newGame = createWordleGame(randomWord);
          setWordleGame(newGame);
          const output = newGame.start();
          setPreviousCommands((prev) => [
            ...prev,
            { command: { mainCommand, args }, output },
          ]);
        } else if (args[0] === "exit" && wordleGame) {
          setWordleGame(null);
          setPreviousCommands((prev) => [
            ...prev,
            {
              command: { mainCommand, args },
              output: "Wordle game exited",
            },
          ]);
        } else if (args[0] && wordleGame) {
          const result = wordleGame.guess(args[0]);
          if (result.valid) {
            setPreviousCommands((prev) => [
              ...prev,
              {
                command: { mainCommand, args },
                output: (
                  <>
                    <p>{result.message}</p>
                    <div className="flex">
                      {result.result.map((letter, index) => {
                        return (
                          <div
                            key={index}
                            className={`${
                              letter.correctness === "green"
                                ? "bg-green-500"
                                : letter.correctness === "yellow"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            } w-[50px] h-[50px] flex items-center justify-center text-white font-bold text-2xl m-1`}
                          >
                            {letter.letter}
                          </div>
                        );
                      })}
                    </div>
                  </>
                ),
              },
            ]);
            if (wordleGame.isGameOver()) {
              setWordleGame(null);
            }
            return;
          }
          setPreviousCommands((prev) => [
            ...prev,
            {
              command: { mainCommand, args },
              output: result.message,
            },
          ]);
          if (wordleGame.isGameOver()) {
            setWordleGame(null);
          }
        } else if (!wordleGame) {
          setPreviousCommands((prev) => [
            ...prev,
            {
              command: { mainCommand, args },
              output: "No Wordle game in progress. Start with 'wordle start'.",
            },
          ]);
        } else {
          setPreviousCommands((prev) => [
            ...prev,
            {
              command: { mainCommand, args },
              output: (
                <>
                  <p>Wordle game in progress</p>
                  <p>Valid commands:</p>
                  <ul>
                    <li>
                      <span className="text-green-500">wordle </span>
                      <span className="text-pink-500">start</span> - Start a new
                      game
                    </li>
                    <li>
                      <span className="text-green-500">wordle </span>
                      <span className="text-pink-500">exit</span> - Exit the
                      current game
                    </li>
                    <li>
                      <span className="text-green-500">wordle </span>
                      <span className="text-pink-500">[word]</span> - Guess a
                      word
                    </li>
                  </ul>
                </>
              ),
            },
          ]);
        }

        break;
      default:
        setPreviousCommands((prev) => [
          ...prev,
          {
            command: { mainCommand, args },
            output: "Command not found: " + mainCommand,
          },
        ]);
    }
  }

  return (
    <div className="font-fira p-4 w-full">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="text-4xl"
            animate={{
              color: ["#22c55e", "#15803d", "#22c55e"], // Tailwind colors for green-500 and green-700
            }}
            transition={{
              duration: 2, // Total time for one complete cycle
              repeat: Infinity, // Loop infinitely
              ease: "easeInOut", // Smooth transition
            }}
          >
            <AnimatedText text={"Terminal Loading..."} duration={2} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ y: -100 }} // Start at x: -100
          animate={{ y: 0 }} // Animate to x: 0
          transition={{ duration: 0.5 }} // Add a transition duration
        >
          <header>
            <h1>
              Terminal - <span className="text-pink-500">Version 1.0</span>
            </h1>
            <p>
              Last login:{" "}
              <span className="text-pink-500">
                {lastLogin || "No previous login"}
              </span>
            </p>
            <p>
              Type <span className="text-green-500">'help'</span> for a list of
              available commands
            </p>
          </header>
          <main>
            <div ref={outputRef}>
              {previousCommands.map((prev, index) => (
                <div key={index}>
                  <PreviousCommand
                    command={
                      prev.command.mainCommand +
                      " " +
                      prev.command.args.join(" ")
                    }
                  />
                  {prev.output}
                </div>
              ))}
            </div>

            <TerminalInput
              processCommand={processCommand}
              previousCommands={previousCommands}
            />
          </main>
        </motion.div>
      )}
    </div>
  );
}
