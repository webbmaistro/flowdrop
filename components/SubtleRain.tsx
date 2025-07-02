"use client";
import { useEffect, useRef } from "react";

interface Raindrop {
  x: number;
  y: number;
  originalX: number; // For returning to original path
  speed: number;
  opacity: number;
  length: number;
  angle: number; // Diagonal fall angle
  deflectionVariance: number; // Individual variance for natural deflection
}

export default function SubtleRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    const raindrops: Raindrop[] = [];
    const mouse = { x: -1000, y: -1000 }; // Start off-screen
    const RAINDROP_COUNT = 60; // More drops for density gradient effect
    const MOUSE_INFLUENCE_RADIUS = 80;
    const DEFLECTION_STRENGTH = 60;

    // Resize canvas to match container
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    // Initialize raindrops with density gradient (more on left, fewer on right)
    const initRaindrops = () => {
      for (let i = 0; i < RAINDROP_COUNT; i++) {
        // Weighted positioning - more drops on left side
        const densityWeight = Math.pow(Math.random(), 2); // Skews toward 0 (left side)
        const x = densityWeight * (canvas.clientWidth + 200); // Extra width for angled rain
        
        // Opacity based on position - more visible on left
        const positionRatio = x / canvas.clientWidth;
        const baseOpacity = 0.3 - (positionRatio * 0.2); // 0.3 on left, 0.1 on right
        
        raindrops.push({
          x,
          y: Math.random() * -canvas.clientHeight, // Start above screen
          originalX: x,
          speed: 1 + Math.random() * 2, // Slow, elegant fall
          opacity: Math.max(0.05, baseOpacity + Math.random() * 0.1), // Ensure minimum visibility
          length: 8 + Math.random() * 12, // Varied raindrop lengths
          angle: 12 + Math.random() * 8, // 12-20 degree angle for natural slant
          deflectionVariance: -0.5 + Math.random(), // Random variance for natural deflection
        });
      }
    };

    // Mouse tracking - global to work across entire page
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with minimal trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; // Reduced trail effect
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      raindrops.forEach((drop) => {
        // Calculate distance to mouse
        const dx = drop.x - mouse.x;
        const dy = drop.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse influence on raindrop with natural variance
        if (distance < MOUSE_INFLUENCE_RADIUS && mouse.x > -500) {
          // Calculate deflection force with individual variance
          const force = (MOUSE_INFLUENCE_RADIUS - distance) / MOUSE_INFLUENCE_RADIUS;
          const naturalVariance = 1 + (drop.deflectionVariance * 0.3); // ±30% variance
          const deflectionX = (dx / distance) * DEFLECTION_STRENGTH * force * 0.03 * naturalVariance;
          const deflectionY = (dy / distance) * DEFLECTION_STRENGTH * force * 0.02 * naturalVariance;
          
          // Add some organic turbulence to the deflection
          const turbulenceX = (Math.sin(Date.now() * 0.001 + drop.x * 0.01) * 0.2) * drop.deflectionVariance;
          const turbulenceY = (Math.cos(Date.now() * 0.0015 + drop.y * 0.008) * 0.15) * drop.deflectionVariance;
          
          // Smoothly deflect the raindrop with natural variance
          drop.x += deflectionX + turbulenceX;
          drop.y += deflectionY + turbulenceY;
        } else {
          // Gradually return to original path when not influenced
          const returnForce = (drop.originalX - drop.x) * 0.01; // Gentler return
          drop.x += returnForce;
        }

        // Move raindrop diagonally (down and slightly right)
        const angleRad = (drop.angle * Math.PI) / 180;
        drop.y += drop.speed;
        drop.x += Math.sin(angleRad) * drop.speed * 0.3; // Gentle horizontal drift

        // Reset raindrop when it falls off screen
        if (drop.y > canvas.clientHeight + drop.length || drop.x > canvas.clientWidth + 100) {
          drop.y = -drop.length;
          
          // Maintain density gradient on respawn - weighted toward left side
          const densityWeight = Math.pow(Math.random(), 2);
          const newX = densityWeight * (canvas.clientWidth + 200);
          
          // Update opacity based on new position
          const positionRatio = newX / canvas.clientWidth;
          const baseOpacity = 0.3 - (positionRatio * 0.2);
          drop.opacity = Math.max(0.05, baseOpacity + Math.random() * 0.1);
          
          drop.x = newX;
          drop.originalX = newX; // Keep track of original path for hover return
        }

        // Draw angled raindrop with gradient
        const drawAngleRad = (drop.angle * Math.PI) / 180;
        const drawDx = Math.sin(drawAngleRad) * drop.length;
        const drawDy = Math.cos(drawAngleRad) * drop.length;
        
        const gradient = ctx.createLinearGradient(
          drop.x - drawDx, 
          drop.y - drawDy, 
          drop.x, 
          drop.y
        );
        gradient.addColorStop(0, `rgba(139, 92, 246, 0)`);
        gradient.addColorStop(0.3, `rgba(139, 92, 246, ${drop.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${drop.opacity * 0.8})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(drop.x - drawDx, drop.y - drawDy); // Start of angled raindrop
        ctx.lineTo(drop.x, drop.y); // End of angled raindrop
        ctx.stroke();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initRaindrops();
    
    // Event listeners
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Start animation
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0
                 [@media(prefers-reduced-motion:reduce)]:hidden"
      style={{ opacity: 0.6 }} // Overall subtle opacity for full page
    />
  );
} 