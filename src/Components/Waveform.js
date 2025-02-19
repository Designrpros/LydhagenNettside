import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

// On desktop: 320px Polaroid with 40px extra (canvas: 400px)
// On mobile: 250px Polaroid with 30px extra (canvas: 310px)
const Canvas = styled.canvas`
  position: absolute;
  top: -40px;
  left: -40px;
  width: 400px;
  height: 400px;
  z-index: 0;

  @media (max-width: 480px) {
    top: -30px;
    left: -30px;
    width: 310px;
    height: 310px;
  }
`;

const useSimulatedOutwardWaveform = (canvasRef) => {
  const drawWaveform = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    // Update canvas dimensions based on its current style.
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    // Determine offset: 40 for desktop, 30 for mobile.
    const offset = window.innerWidth < 480 ? 30 : 40;
    // Effective Polaroid size.
    const POLAROID_SIZE = WIDTH - offset * 2;
    const centerX = WIDTH / 2;
    const centerY = HEIGHT / 2;
    const polaroidHalf = POLAROID_SIZE / 2;
    // Define a margin from each corner where no waveform is drawn.
    const cornerMargin = 20;
    const step = 10;

    // Clear canvas.
    context.clearRect(0, 0, WIDTH, HEIGHT);
    context.strokeStyle = '#000000';
    context.lineWidth = 3;

    // --- Top Edge ---
    for (
      let x = centerX - polaroidHalf + cornerMargin;
      x <= centerX + polaroidHalf - cornerMargin;
      x += step
    ) {
      const barLength = Math.random() * 20 + 5;
      context.beginPath();
      context.moveTo(x, centerY - polaroidHalf);
      context.lineTo(x, centerY - polaroidHalf - barLength);
      context.stroke();
    }

    // --- Bottom Edge ---
    for (
      let x = centerX - polaroidHalf + cornerMargin;
      x <= centerX + polaroidHalf - cornerMargin;
      x += step
    ) {
      const barLength = Math.random() * 20 + 5;
      context.beginPath();
      context.moveTo(x, centerY + polaroidHalf);
      context.lineTo(x, centerY + polaroidHalf + barLength);
      context.stroke();
    }

    // --- Left Edge ---
    for (
      let y = centerY - polaroidHalf + cornerMargin;
      y < centerY + polaroidHalf - cornerMargin;
      y += step
    ) {
      const barLength = Math.random() * 20 + 5;
      context.beginPath();
      context.moveTo(centerX - polaroidHalf, y);
      context.lineTo(centerX - polaroidHalf - barLength, y);
      context.stroke();
    }

    // --- Right Edge ---
    // Add a small adjustment on mobile to align the bars correctly.
    const adjustment = window.innerWidth < 480 ? 1 : 0;
    const rightEdgeX = Math.round(centerX + polaroidHalf) + adjustment;
    for (
      let y = centerY - polaroidHalf + cornerMargin;
      y < centerY + polaroidHalf - cornerMargin;
      y += step
    ) {
      const barLength = Math.random() * 20 + 5;
      context.beginPath();
      context.moveTo(rightEdgeX, y);
      context.lineTo(rightEdgeX + barLength, y);
      context.stroke();
    }
  }, [canvasRef]);

  // Animation loop.
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      drawWaveform();
      animationFrameId = requestAnimationFrame(() => {
        setTimeout(animate, 300);
      });
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [drawWaveform]);

  // Recalculate on window resize.
  useEffect(() => {
    const handleResize = () => {
      drawWaveform();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawWaveform]);
};

const Waveform = () => {
  const canvasRef = useRef(null);
  useSimulatedOutwardWaveform(canvasRef);
  return <Canvas ref={canvasRef} />;
};

export default Waveform;