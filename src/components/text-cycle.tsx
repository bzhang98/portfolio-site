import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code,
  NotebookTabs,
  Smartphone,
  Layers3,
  Blocks,
  Library,
  Cog,
  FileCode2,
  Brush,
} from "lucide-react";

const text = [
  <>
    <Code size={24} /> Web Developer
  </>,
  <>
    <NotebookTabs size={24} /> Student
  </>,
  <>
    <Smartphone size={24} /> Tech Enthusiast
  </>,
  <>
    <Layers3 size={24} /> Full-Stack Developer
  </>,
  <>
    <Blocks size={24} /> UI/UX Designer
  </>,
  <>
    <Library size={24} /> Lifelong Learner
  </>,
  <>
    <Cog size={24} /> Problem Solver
  </>,
  <>
    <FileCode2 size={24} /> Software Engineer
  </>,
  <>
    <Brush size={24} /> Creative
  </>,
];

export default function TextCycle() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [index]);

  const handleExitComplete = () => {
    setIndex((prevIndex) => (prevIndex + 1) % text.length);
    setIsVisible(true);
  };

  return (
    <div>
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {isVisible && (
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold font-fira flex items-center justify-center gap-2 select-none"
          >
            {text[index]}
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
}
