import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function FlipCard({ children }: { children: React.ReactNode }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const { ref, entry } = useInView({
    threshold: Array.from({ length: 101 }, (_, i) => i * 0.01),
    rootMargin: "0px 0px -40px 0px",
    triggerOnce: false,
  });

  const scale = entry ? 0.6 + entry.intersectionRatio * (1 - 0.6) : 0.6;
  const opacity = entry ? 0.6 + entry.intersectionRatio * (1 - 0.6) : 0.6;
  const rotateX = entry ? 40 + entry.intersectionRatio * (0 - 40) : 40;

  const childArray = React.Children.toArray(children);

  if (childArray.length !== 2) {
    throw new Error("FlipCard component must have exactly 2 children");
  }

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <motion.div
      ref={ref}
      onClick={handleClick}
      initial={{
        filter: "drop-shadow(0px 0px 0px rgba(255, 255, 255, 0.5))",
      }}
      whileHover={{
        filter: "drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.5))",
      }}
      whileTap={{
        scale: 0.95,
      }}
      animate={{ scale, opacity, rotateX }}
      transition={{
        duration: 0.2,
      }}
      className="card"
    >
      <Face isFront={!isFlipped}>{childArray[0]}</Face>
      <Face isFront={isFlipped}>{childArray[1]}</Face>
    </motion.div>
  );
}

function Face({
  children,
  isFront,
}: {
  children: React.ReactNode;
  isFront: boolean;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ rotateX: isFront ? [180, 360] : [0, 180] }}
      transition={{ duration: 2, type: "spring", damping: 15, stiffness: 100 }}
      className="card__inner"
    >
      {children}
    </motion.div>
  );
}
