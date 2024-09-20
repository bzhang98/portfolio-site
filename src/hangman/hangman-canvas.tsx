import React, { useEffect, useRef } from 'react';

type HangmanCanvasProps = {
  stage: number; // 0 to 6, where 0 is empty and 6 is the fully drawn hangman
};

const HangmanCanvas: React.FC<HangmanCanvasProps> = ({ stage }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reset canvas for each stage
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set black background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set white for drawing
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2; // Adjust line width for smaller size

    // Scale down coordinates for smaller canvas
    const drawGallows = () => {
      ctx.beginPath();
      ctx.moveTo(5, 45); // base line
      ctx.lineTo(25, 45);
      ctx.moveTo(15, 45); // vertical pole
      ctx.lineTo(15, 5);
      ctx.lineTo(35, 5); // horizontal pole
      ctx.lineTo(35, 10); // rope
      ctx.stroke();
    };

    const drawHead = () => {
      ctx.beginPath();
      ctx.arc(35, 15, 4, 0, Math.PI * 2, true); // head
      ctx.stroke();
    };

    const drawBody = () => {
      ctx.beginPath();
      ctx.moveTo(35, 19);
      ctx.lineTo(35, 30);
      ctx.stroke();
    };

    const drawLeftArm = () => {
      ctx.beginPath();
      ctx.moveTo(35, 22);
      ctx.lineTo(30, 26);
      ctx.stroke();
    };

    const drawRightArm = () => {
      ctx.beginPath();
      ctx.moveTo(35, 22);
      ctx.lineTo(40, 26);
      ctx.stroke();
    };

    const drawLeftLeg = () => {
      ctx.beginPath();
      ctx.moveTo(35, 30);
      ctx.lineTo(30, 38);
      ctx.stroke();
    };

    const drawRightLeg = () => {
      ctx.beginPath();
      ctx.moveTo(35, 30);
      ctx.lineTo(40, 38);
      ctx.stroke();
    };

    const drawStage = () => {
      // Always draw the gallows regardless of the stage
      drawGallows();

      // Calculate based on remaining lives
      switch (stage) {
        case 0: // 0 lives left, full hangman
          drawRightLeg();
          drawLeftLeg();
          drawRightArm();
          drawLeftArm();
          drawBody();
          drawHead();
          break;
        case 1: // 1 life left
          drawLeftLeg();
          drawRightArm();
          drawLeftArm();
          drawBody();
          drawHead();
          break;
        case 2: // 2 lives left
          drawRightArm();
          drawLeftArm();
          drawBody();
          drawHead();
          break;
        case 3: // 3 lives left
          drawLeftArm();
          drawBody();
          drawHead();
          break;
        case 4: // 4 lives left
          drawBody();
          drawHead();
          break;
        case 5: // 5 lives left
          drawHead();
          break;
        case 6: // 6 lives left (only gallows)
        default:
          // Gallows are already drawn above, nothing more to add.
          break;
      }
    };

    drawStage();
  }, [stage]);

  return (
    <canvas
      ref={canvasRef}
      width={50}
      height={50}
      className='p-4 w-[100px] h-[100px]'
    />
  );
};

export default HangmanCanvas;
