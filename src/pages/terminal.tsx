import TerminalInput from "@/components/terminal-input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedText from "@/components/animated-text";

function PreviousCommand({ command }: { command: string }) {
  return (
    <div className="user-input">
      <span>guest@https://brzh.dev/terminal $ </span>
      <p className="inline-block">{command}</p>
    </div>
  );
}

interface Command {
  command: string;
  output: string | JSX.Element;
}

export default function Terminal() {
  const [previousCommands, setPreviousCommands] = useState<Command[]>([]);
  const [lastLogin] = useState<string>(localStorage.getItem("lastLogin") || "");
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date().toLocaleString();
    localStorage.setItem("lastLogin", now);
  }, []);

  function processCommand(command: string) {
    switch (true) {
      case command === "":
        break;

      case command === "help":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command,
            output: (
              <div>
                <p>Available commands:</p>
                <ul>
                  <li>help - Show this help message</li>
                  <li>clear - Clear the terminal</li>
                  <li>date - Show the current date and time</li>
                  <li>
                    source - see the source code for this website on github
                  </li>
                  <li>run - go to the main site</li>
                  <li>echo [text] - display the text on the screen</li>
                  <li>
                    calc [expression] - evaluate a simple mathematical function
                  </li>
                  <li>history - show command history</li>
                </ul>
              </div>
            ),
          },
        ]);
        break;

      case command === "clear":
        setPreviousCommands([]);
        break;

      case command === "date":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command,
            output: new Date().toLocaleString(),
          },
        ]);
        break;

      case command === "source":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command,
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

      case command === "run":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command,
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

      case command.startsWith("echo"):
        setPreviousCommands((prev) => [
          ...prev,
          {
            command,
            output: command.substring(5),
          },
        ]);
        break;

      case command.startsWith("calc"):
        try {
          const result = eval(command.substring(5));
          setPreviousCommands((prev) => [
            ...prev,
            {
              command,
              output: result,
            },
          ]);
        } catch (error) {
          setPreviousCommands((prev) => [
            ...prev,
            {
              command,
              output: "Invalid expression",
            },
          ]);
        }
        break;

      case command === "history":
        setPreviousCommands((prev) => [
          ...prev,
          {
            command,
            output: prev.map((cmd) => cmd.command).join("\n"),
          },
        ]);
        break;

      default:
        setPreviousCommands((prev) => [
          ...prev,
          { command, output: "Command not found: " + command },
        ]);
    }
  }

  return (
    <>
      <div className="font-fira p-4 w-full">
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
          {previousCommands.map((command, index) => (
            <div key={index}>
              <PreviousCommand command={command.command}></PreviousCommand>
              {command.output}
            </div>
          ))}
          <TerminalInput
            processCommand={processCommand}
            previousCommands={previousCommands}
          ></TerminalInput>
        </main>
      </div>
    </>
  );
}
