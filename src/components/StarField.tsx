import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  brightness: number;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: Star[] = [];
    const numStars = 400; // Much more stars

    // Create stars with varying sizes and brightness
    for (let i = 0; i < numStars; i++) {
      const brightness = Math.random();
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: brightness > 0.8 ? Math.random() * 2 + 1 : Math.random() * 1 + 0.3,
        opacity: brightness > 0.9 ? 1 : Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        brightness: brightness,
      });
    }

    let time = 0;

    const animate = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      stars.forEach((star, index) => {
        // Create twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + index) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;

        // Different star colors based on brightness
        let color = '255, 255, 255'; // White for most stars
        if (star.brightness > 0.95) {
          color = '255, 255, 240'; // Slightly warm white for bright stars
        } else if (star.brightness > 0.85) {
          color = '240, 248, 255'; // Cool white
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${currentOpacity})`;
        ctx.fill();

        // Add glow effect for brighter stars
        if (star.brightness > 0.8) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${currentOpacity * 0.1})`;
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#000000' }}
    />
  );
};

export default StarField;