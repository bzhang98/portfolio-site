import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code,
  NotebookTabs,
  Smartphone,
  Blocks,
  Dumbbell,
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
    <Blocks size={24} /> UI/UX Designer
  </>,
  <>
    <Dumbbell size={24} /> Fitness Lover
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
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl xs:text-4xl font-semibold flex items-center justify-center gap-2 select-none w-[24rem]`}
          >
            {text[index]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
