import React, { useEffect, useRef, useState } from "react";

const ProceduralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  const shapeSize = 50;

  // Helper functions for random number generation
  const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Drawing functions for plus, circle, and triangle
  const drawPlus = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    color: string
  ) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3; // Adjust line width for visibility
    ctx.beginPath();
    ctx.moveTo(x - size / 2, y); // Horizontal line
    ctx.lineTo(x + size / 2, y);
    ctx.moveTo(x, y - size / 2); // Vertical line
    ctx.lineTo(x, y + size / 2);
    ctx.stroke();
  };

  const drawCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    color: string
  ) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3; // Adjust line width for visibility
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, 2 * Math.PI); // Draw a circle (hollow)
    ctx.stroke();
  };

  const drawTriangle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    color: string
  ) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3; // Adjust line width for visibility
    ctx.beginPath();
    ctx.moveTo(x, y - size / 2); // Top point
    ctx.lineTo(x - size / 2, y + size / 2); // Bottom-left
    ctx.lineTo(x + size / 2, y + size / 2); // Bottom-right
    ctx.closePath(); // Close the triangle
    ctx.stroke();
  };

  // Function to generate random shapes
  const drawRandomShape = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    const x = randomInt(0, width);
    const y = randomInt(0, height);
    const colors = ["#f9f9f9", "#ff6347", "#1e90ff", "#32cd32"]; // Use any desired color scheme
    const color = colors[randomInt(0, colors.length - 1)];

    const shapeType = randomInt(1, 3); // Randomly choose a shape type
    if (shapeType === 1) {
      drawPlus(ctx, x, y, shapeSize, color);
    } else if (shapeType === 2) {
      drawCircle(ctx, x, y, shapeSize, color);
    } else {
      drawTriangle(ctx, x, y, shapeSize, color);
    }
  };

  // Main function that runs after component mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const { width, height } = canvas;
      if (ctx) {
        // Clear the canvas
        ctx.clearRect(0, 0, width, height);

        // Draw random shapes
        for (let i = 0; i < 100; i++) {
          drawRandomShape(ctx, width, height);
        }
      }
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5) * 100; // Adjust multiplier for effect strength
      const y = (event.clientY / innerHeight - 0.5) * 100;

      setParallaxOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
        transition: "transform 0.05s ease-out",
      }}
    ></canvas>
  );
};

export default ProceduralBackground;
