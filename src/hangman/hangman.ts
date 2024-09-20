// hangman.ts
export type HangmanGame = {
  start: () => string;
  guess: (letter: string) => string;
  isGameOver: () => boolean;
  getWordProgress: () => string;
  getGuessedLetters: () => string[];
  getRemainingGuesses: () => number;
};

export function createHangman(
  words: string[] = [
    "typescript",
    "react",
    "terminal",
    "website",
  ]
): HangmanGame {
  let word = "";
  let guessedLetters: string[] = [];
  let remainingGuesses = 6;

  function start(): string {
    word = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingGuesses = 6;
    return `Welcome to Hangman! The word has ${word.length} letters. You have ${remainingGuesses} guesses.`;
  }

  function guess(letter: string): string {
    if (guessedLetters.includes(letter)) {
      return "You already guessed that letter!";
    }

    guessedLetters.push(letter);

    if (!word.includes(letter)) {
      remainingGuesses -= 1;
      if (remainingGuesses === 0) {
        return `Game over! The word was: ${word}`;
      }
      return `Wrong guess! ${remainingGuesses} guesses left.`;
    }

    const wordProgress = getWordProgress();

    if (!wordProgress.includes("_")) {
      return `Congratulations! You guessed the word: ${word}`;
    }

    return `Good guess! Word: ${wordProgress}`;
  }

  function isGameOver(): boolean {
    return (
      remainingGuesses === 0 || getWordProgress().replace(/\s/g, "") === word
    );
  }

  function getWordProgress(): string {
    return word
      .split("")
      .map((char) => (guessedLetters.includes(char) ? char : "_"))
      .join(" ");
  }

  function getGuessedLetters(): string[] {
    return guessedLetters;
  }

  function getRemainingGuesses(): number {
    return remainingGuesses;
  }

  return {
    start,
    guess,
    isGameOver,
    getWordProgress,
    getGuessedLetters,
    getRemainingGuesses,
  };
}
