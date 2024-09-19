import { useEffect, useState } from "react";

export default function TypingEffect({ children }: { children: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const text = typeof children === "string" ? children : "";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length - 1) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval); // Clear interval when all characters are typed

        const cursorInterval = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 700); // Cursor blink speed

        return () => clearInterval(cursorInterval); // Clean up cursor interval on unmount
      }
    }, 150); // Adjust the delay (in ms) between each character

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <h2 className="text-4xl font-fira">
      {displayedText}
      <span>{showCursor ? "_" : ""}</span>
    </h2>
  );
}
