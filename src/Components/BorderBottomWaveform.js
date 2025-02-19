import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// Styled component for the canvas with responsive dimensions
const Canvas = styled.canvas`
  width: 100%;
  height: 60px; /* Default waveform height */
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    height: 50px; /* Medium screens */
  }

  @media (max-width: 480px) {
    width: 100%;  /* Smaller width on mobile devices */
    height: 40px; /* Smaller height on mobile devices */
  }
`;

// Custom hook to draw the inverted waveform
const useInvertedWaveform = (canvasRef) => {
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    // Ensure the canvas's internal dimensions match its styled dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const drawWaveform = () => {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      context.strokeStyle = '#000000'; // Waveform color (black)
      context.lineWidth = 3;           // Line thickness

      const step = 10; 
      const maxBarHeight = HEIGHT * 0.5;  // Max bar height is 50% of canvas height

      for (let i = 0; i < WIDTH / step; i++) {
        const barHeight = Math.random() * maxBarHeight;
        // Draw the line starting at the top and extending downward
        context.beginPath();
        context.moveTo(i * step, 0);
        context.lineTo(i * step, barHeight);
        context.stroke();
      }
    };

    const animate = () => {
      setTimeout(() => {
        drawWaveform();
        requestAnimationFrame(animate);
      }, 300); // Animation speed
    };

    animate();
  }, [canvasRef]);
};

// Inverted waveform component
const BorderBottomWaveform = () => {
  const canvasRef = useRef(null);
  useInvertedWaveform(canvasRef);

  return <Canvas ref={canvasRef} />;
};

export default BorderBottomWaveform;