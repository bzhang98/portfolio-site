import { useEffect, useRef, useState } from "react";

export default function TerminalInput({
  processCommand,
  previousCommands,
}: {
  processCommand: any;
  previousCommands: any;
}) {
  const [input, setInput] = useState("");
  const inputRef = useRef(input); // Ref to store the current input value

  const [currentCommandIndex, setCurrentCommandIndex] = useState(-1);
  const commandIndexRef = useRef(currentCommandIndex);

  useEffect(() => {
    inputRef.current = input; // Update the ref whenever input changes
    commandIndexRef.current = currentCommandIndex;
  }, [input, currentCommandIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        // Handle Enter key, e.g., submit command
        processCommand(inputRef.current);
        setInput(""); // Clear the input after submission
        setCurrentCommandIndex(previousCommands.length);
      } else if (e.key === "ArrowUp") {
        // Handle ArrowUp key
        e.preventDefault();
        if (!previousCommands.length) return;
        if (commandIndexRef.current === 0) {
          setInput(
            previousCommands[commandIndexRef.current].command.mainCommand +
              " " +
              previousCommands[commandIndexRef.current].command.args.join(" ")
          );
          return;
        }
        setInput(
          previousCommands[commandIndexRef.current].command.mainCommand +
            " " +
            previousCommands[commandIndexRef.current].command.args.join(" ")
        );
        setCurrentCommandIndex((prev) => {
          return prev - 1;
        });
      } else if (e.key === "ArrowDown") {
        // Handle ArrowDown key
        e.preventDefault();
        if (!previousCommands.length) return;
        if (commandIndexRef.current === previousCommands.length - 1) {
          setInput("");
          return;
        }
        setInput(
          previousCommands[commandIndexRef.current + 1].command.mainCommand +
            " " +
            previousCommands[commandIndexRef.current + 1].command.args.join(" ")
        );
        setCurrentCommandIndex((prev) => {
          return prev + 1;
        });
      } else if (e.key.length === 1) {
        // Handle other printable characters
        setInput((prev) => prev + e.key); // Append character to input
      } else if (e.key === "Backspace") {
        // Handle Backspace key
        setInput((prev) => prev.slice(0, -1)); // Remove last character
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [previousCommands]);

  return (
    <div className="user-input">
      <span>guest@https://brzh.dev/terminal $ </span>
      <p className="inline-block leading-none">
        {input}
        <span
          style={{
            display: "inline-block",
            width: "8px",
            height: "16px",
            border: "1px solid white",
            backgroundColor: "white",
          }}
        ></span>
      </p>
    </div>
  );
}
