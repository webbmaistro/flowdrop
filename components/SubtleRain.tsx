"use client";
import { useEffect, useRef, useCallback } from "react";
import { usePerformanceSettings } from "@/lib/performance";

interface Raindrop {
  x: number;
  y: number;
  originalX: number; // For returning to original path
  speed: number;
  opacity: number;
  length: number;
  angle: number; // Diagonal fall angle
  deflectionVariance: number; // Individual variance for natural deflection
  wobbleOffset: number; // For natural wobble motion
  speedVariation: number; // For subtle speed changes
  prevX: number; // Previous position for natural trail direction
  prevY: number; // Previous position for natural trail direction
  baseAngle: number; // Original angle for reference
  trailType: number; // Trail shape variation (0-1)
  taperness: number; // How much the trail tapers (0-1)
  history: { x: number; y: number }[]; // Recent positions for smooth tail
}

export default function SubtleRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const performanceSettings = usePerformanceSettings();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    const raindrops: Raindrop[] = [];
    const mouse = { x: -1000, y: -1000 }; // Start off-screen
    
    // Use performance-aware raindrop count
    let RAINDROP_COUNT = performanceSettings.raindropCount;
    
    // Early exit if animations are disabled
    if (performanceSettings.animationLevel === 'minimal' || !performanceSettings.enableParticles) {
      return;
    }
    const MOUSE_INFLUENCE_RADIUS = 104; // 30% bigger for enhanced interaction
    const DEFLECTION_STRENGTH = 60;

    // Resize canvas to match container and adjust raindrop count
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      // Set display size (css pixels)
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      
      // Set actual size in memory (scaled for device DPI)
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      
      // Normalize coordinate system to use css pixels
      ctx.scale(devicePixelRatio, devicePixelRatio);
      
      // Update raindrop count based on performance settings
      const newDropCount = performanceSettings.raindropCount;
      if (newDropCount !== RAINDROP_COUNT) {
        RAINDROP_COUNT = newDropCount;
        
        // Adjust raindrop array
        if (raindrops.length < RAINDROP_COUNT) {
          // Add more raindrops for larger screens
          while (raindrops.length < RAINDROP_COUNT) {
            const densityWeight = Math.pow(Math.random(), 2);
            const x = densityWeight * (canvas.clientWidth + 200);
            const positionRatio = x / canvas.clientWidth;
            const baseOpacity = 0.25 - (positionRatio * 0.15);
            const baseAngle = 12 + Math.random() * 8;
            
            raindrops.push({
              x,
              y: Math.random() * -canvas.clientHeight,
              originalX: x,
              speed: (1 + Math.random() * 2) * 0.8,
              opacity: Math.max(0.04, baseOpacity + Math.random() * 0.08),
              length: 6 + Math.random() * 78,
              angle: baseAngle,
              baseAngle: baseAngle,
              deflectionVariance: -0.5 + Math.random(),
              wobbleOffset: Math.random() * Math.PI * 2,
              speedVariation: 0.8 + Math.random() * 0.4,
              prevX: x,
              prevY: Math.random() * -canvas.clientHeight,
              trailType: Math.random(),
              taperness: 0.3 + Math.random() * 0.7,
              history: [],
            });
          }
        } else if (raindrops.length > RAINDROP_COUNT) {
          // Remove raindrops for smaller screens
          raindrops.splice(RAINDROP_COUNT);
        }
      }
    };

    // Initialize raindrops with density gradient (more on left, fewer on right)
    const initRaindrops = () => {
      for (let i = 0; i < RAINDROP_COUNT; i++) {
        // Weighted positioning - more drops on left side
        const densityWeight = Math.pow(Math.random(), 2); // Skews toward 0 (left side)
        const x = densityWeight * (canvas.clientWidth + 200); // Extra width for angled rain
        
                 // Opacity based on position - more visible on left, tuned for density
         const positionRatio = x / canvas.clientWidth;
         const baseOpacity = 0.25 - (positionRatio * 0.15); // 0.25 on left, 0.1 on right
         
         const baseAngle = 12 + Math.random() * 8; // 12-20 degree base angle
         raindrops.push({
           x,
           y: Math.random() * -canvas.clientHeight, // Start above screen
           originalX: x,
           speed: (1 + Math.random() * 2) * 0.8, // 20% slower for more graceful fall
           opacity: Math.max(0.04, baseOpacity + Math.random() * 0.08), // Tuned for denser effect
           length: 6 + Math.random() * 78, // Varied trail lengths - up to 6x longer (max 84px)
           angle: baseAngle, // Current angle (will change naturally)
           baseAngle: baseAngle, // Original angle for reference
           deflectionVariance: -0.5 + Math.random(), // Random variance for natural deflection
           wobbleOffset: Math.random() * Math.PI * 2, // Unique wobble phase
           speedVariation: 0.8 + Math.random() * 0.4, // Natural speed variation
           prevX: x, // Initialize previous position
           prevY: Math.random() * -canvas.clientHeight, // Initialize previous position
           trailType: Math.random(), // Random trail shape variation
           taperness: 0.3 + Math.random() * 0.7, // How much the trail tapers (0.3-1.0)
           history: [],
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

    // Performance tracking
    let lastFrameTime = 0;
    let frameCount = 0;
    const targetFrameTime = 1000 / performanceSettings.frameRate;
    
    // Animation loop with performance throttling
    const animate = (currentTime: number = performance.now()) => {
      // Throttle frame rate for low-end devices
      if (currentTime - lastFrameTime < targetFrameTime) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime = currentTime;
      frameCount++;
      
      // Clear canvas with minimal trail effect
      const clearAlpha = performanceSettings.animationLevel === 'reduced' ? 0.25 : 0.15;
      ctx.fillStyle = `rgba(0, 0, 0, ${clearAlpha})`;
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

        // Store previous position for natural trail direction
        drop.prevX = drop.x;
        drop.prevY = drop.y;
        
        // Natural raindrop movement with subtle wobble and speed variation
        const time = Date.now() * 0.001;
        const wobble = Math.sin(time * 2 + drop.wobbleOffset) * 0.3 * drop.deflectionVariance;
        const speedMultiplier = drop.speedVariation + Math.sin(time * 0.5 + drop.wobbleOffset) * 0.1;
        
        // Move raindrop diagonally with natural wobble
        const angleRad = (drop.baseAngle * Math.PI) / 180;
        drop.y += drop.speed * speedMultiplier;
        drop.x += Math.sin(angleRad) * drop.speed * 0.3 + wobble; // Natural horizontal drift + wobble
        
        // Calculate natural trail angle based on actual movement
        const actualDx = drop.x - drop.prevX;
        const actualDy = drop.y - drop.prevY;
        if (actualDy > 0) { // Only update if moving downward
          const naturalAngle = Math.atan2(actualDx, actualDy) * (180 / Math.PI);
          // Smooth blend between base angle and natural movement angle
          drop.angle = drop.baseAngle * 0.7 + naturalAngle * 0.3;
        }

        // Reset raindrop when it falls off screen
        if (drop.y > canvas.clientHeight + drop.length || drop.x > canvas.clientWidth + 100) {
          drop.y = -drop.length;
          
          // Maintain density gradient on respawn - weighted toward left side
          const densityWeight = Math.pow(Math.random(), 2);
          const newX = densityWeight * (canvas.clientWidth + 200);
          
          // Update opacity based on new position (tuned for density)
          const positionRatio = newX / canvas.clientWidth;
          const baseOpacity = 0.25 - (positionRatio * 0.15);
          drop.opacity = Math.max(0.04, baseOpacity + Math.random() * 0.08);
          
          drop.x = newX;
          drop.originalX = newX; // Keep track of original path for hover return
          
          // Reset natural movement properties for variety
          drop.wobbleOffset = Math.random() * Math.PI * 2;
          drop.speedVariation = 0.8 + Math.random() * 0.4;
          drop.baseAngle = 12 + Math.random() * 8; // New base angle
          drop.angle = drop.baseAngle; // Reset current angle
          drop.prevX = newX; // Reset previous position tracking
          drop.prevY = -drop.length;
          drop.trailType = Math.random(); // New trail shape variation
          drop.taperness = 0.3 + Math.random() * 0.7; // New taperness
          drop.history = []; // Reset history
        }

        // ----- Performance-optimized tail drawing -----
        // Reduce history length for better performance
        const MAX_HISTORY = performanceSettings.animationLevel === 'full' ? 12 : 6;
        drop.history.push({ x: drop.x, y: drop.y });
        if (drop.history.length > MAX_HISTORY) drop.history.shift();

        // Only draw if we have at least 2 points
        const historyLen = drop.history.length;
        if (historyLen > 1) {
          // Simplified calculations for better performance
          const shimmer = performanceSettings.animationLevel === 'full' 
            ? Math.sin(time * 3 + drop.wobbleOffset) * 0.1 + 0.9 
            : 1;
          const speedFactor = speedMultiplier || 1;
          const dynamicLength = drop.length * (0.8 + speedFactor * 0.2);

          // Batch drawing operations
          ctx.lineCap = "round";
          
          for (let i = 1; i < historyLen; i++) {
            const p1 = drop.history[i - 1];
            const p2 = drop.history[i];
            const t = i / historyLen; // 0 = tail, 1 = near head

            let lineWidth;
            let color;

            if (performanceSettings.animationLevel === 'minimal') {
              // Simplified rendering for minimal mode
              lineWidth = 0.5 + dynamicLength / 100;
              color = `rgba(255, 255, 255, ${drop.opacity * t * 0.6})`;
            } else if (drop.trailType < 0.3) {
              // Sharp trail
              lineWidth = (0.4 + dynamicLength / 80) * t;
              color = `rgba(255, 255, 255, ${drop.opacity * t * shimmer})`;
            } else if (drop.trailType < 0.7) {
              // Tapered trail
              const taper = Math.pow(1 - t, drop.taperness);
              lineWidth = (0.6 + dynamicLength / 70) * taper;
              color = `rgba(168, 85, 247, ${drop.opacity * (0.1 + t * 0.9) * shimmer})`;
            } else {
              // Diffuse trail
              lineWidth = (0.8 + dynamicLength / 50) * t;
              color = `rgba(139, 92, 246, ${drop.opacity * (0.08 + 0.6 * t) * shimmer})`;
            }

            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // Draw subtle mouse halo (only for full animation mode)
      if (performanceSettings.animationLevel === 'full' && 
          mouse.x > -500 && mouse.x < canvas.clientWidth && mouse.y > 0 && mouse.y < canvas.clientHeight) {
        const haloGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, MOUSE_INFLUENCE_RADIUS
        );
        haloGradient.addColorStop(0, 'rgba(139, 92, 246, 0.03)');
        haloGradient.addColorStop(0.7, 'rgba(139, 92, 246, 0.01)');
        haloGradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        
        ctx.fillStyle = haloGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, MOUSE_INFLUENCE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initRaindrops();
    
    // Event listeners
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Handle performance settings changes
    const handlePerformanceChange = (event: CustomEvent) => {
      const newSettings = event.detail;
      RAINDROP_COUNT = newSettings.raindropCount;
      
      // Adjust raindrop array
      if (raindrops.length > RAINDROP_COUNT) {
        raindrops.splice(RAINDROP_COUNT);
      } else if (raindrops.length < RAINDROP_COUNT) {
        while (raindrops.length < RAINDROP_COUNT) {
          const densityWeight = Math.pow(Math.random(), 2);
          const x = densityWeight * (canvas.clientWidth + 200);
          const positionRatio = x / canvas.clientWidth;
          const baseOpacity = 0.25 - (positionRatio * 0.15);
          const baseAngle = 12 + Math.random() * 8;
          
          raindrops.push({
            x,
            y: Math.random() * -canvas.clientHeight,
            originalX: x,
            speed: (1 + Math.random() * 2) * 0.8,
            opacity: Math.max(0.04, baseOpacity + Math.random() * 0.08),
            length: 6 + Math.random() * 78,
            angle: baseAngle,
            baseAngle: baseAngle,
            deflectionVariance: -0.5 + Math.random(),
            wobbleOffset: Math.random() * Math.PI * 2,
            speedVariation: 0.8 + Math.random() * 0.4,
            prevX: x,
            prevY: Math.random() * -canvas.clientHeight,
            trailType: Math.random(),
            taperness: 0.3 + Math.random() * 0.7,
            history: [],
          });
        }
      }
    };

    // Start animation
    animate();

    // Event listeners
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("performance-settings-changed", handlePerformanceChange as EventListener);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("performance-settings-changed", handlePerformanceChange as EventListener);
    };
  }, [performanceSettings]);

  // Don't render if animations are disabled
  if (performanceSettings.animationLevel === 'minimal' || !performanceSettings.enableParticles) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none
                 [@media(prefers-reduced-motion:reduce)]:hidden"
      style={{ 
        opacity: performanceSettings.animationLevel === 'reduced' ? 0.5 : 0.7,
        willChange: 'auto' // Optimize for performance
      }}
    />
  );
} 