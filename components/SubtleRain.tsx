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
  wobbleOffset: number; // For natural wobble motion
  speedVariation: number; // For subtle speed changes
  prevX: number; // Previous position for natural trail direction
  prevY: number; // Previous position for natural trail direction
  baseAngle: number; // Original angle for reference
  trailType: number; // Trail shape variation (0-1)
  taperness: number; // How much the trail tapers (0-1)
  history: { x: number; y: number }[]; // Recent positions for smooth tail
  swirlSpeed: number; // Individual speed for vortex swirl
  swirlDirection: number; // 1 or -1 for CW / CCW
  targetRadius: number; // Preferred orbit radius around cursor
  speedScale: number; // 0.5 → 1 gradual acceleration factor
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
    const vortexActive = { current: false };
    const vortexFactorRef = { current: 0 }; // 0→1 eased strength
    const releaseFactorRef = { current: 0 }; // burst repulsion strength after vortex off
    
    // Responsive raindrop count - more for desktop screens
    const getDropCount = () => {
      const screenWidth = window.innerWidth;
      const isDesktop = screenWidth >= 1024; // lg breakpoint
      const isTablet = screenWidth >= 768; // md breakpoint
      
      if (isDesktop) return 240; // Double for desktop
      if (isTablet) return 180;  // 1.5x for tablet
      return 120; // Base count for mobile
    };
    
    let RAINDROP_COUNT = getDropCount();
    const MOUSE_INFLUENCE_RADIUS = 104; // 30% bigger for enhanced interaction
    const DEFLECTION_STRENGTH = 60;
    const RADIAL_PULL_FACTOR = 0.2; // Stronger pull toward orbit radius
    const WIND_STRENGTH = 1.2; // Stronger horizontal push from left
    const GLOBAL_SPEED_FACTOR = 0.7; // Cut overall speed by ~30%

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
      
      // Update raindrop count based on new screen size
      const newDropCount = getDropCount();
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
              swirlSpeed: 1 + Math.random() * 2,
              swirlDirection: Math.random() < 0.5 ? -1 : 1,
              targetRadius: 12 + Math.random() * 18, // 12-30px tight orbit
              speedScale: 0.5,
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
        const x = densityWeight * (canvas.clientWidth + 200);
        const ySpawn = Math.random() * -canvas.clientHeight; // start above screen for graceful entry
        
                 // Opacity based on position - more visible on left, tuned for density
         const positionRatio = x / canvas.clientWidth;
         const baseOpacity = 0.25 - (positionRatio * 0.15); // 0.25 on left, 0.1 on right
         
         const baseAngle = 12 + Math.random() * 8; // 12-20 degree base angle
         raindrops.push({
           x,
           y: ySpawn,
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
           prevY: ySpawn, // Initialize previous position
           trailType: Math.random(), // Random trail shape variation
           taperness: 0.3 + Math.random() * 0.7, // How much the trail tapers (0.3-1.0)
           history: [],
           swirlSpeed: 1 + Math.random() * 2,
           swirlDirection: Math.random() < 0.5 ? -1 : 1,
           targetRadius: 12 + Math.random() * 18,
           speedScale: 0.5,
         });
      }
    };

    // Mouse tracking & click toggle
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleClick = () => {
      // Toggle vortex state
      if (vortexActive.current) {
        // Turning OFF: initialise repulsion burst
        releaseFactorRef.current = 1;
      }
      vortexActive.current = !vortexActive.current;
    };

    let currentRainFront = 0; // deepest y reached by any drop during animation

    // Animation loop
    const animate = () => {
      // Smoothly interpolate vortex factor toward target (0 or 1)
      const targetFactor = vortexActive.current ? 1 : 0;
      vortexFactorRef.current += (targetFactor - vortexFactorRef.current) * 0.05; // ease 5%

      const vortexFactor = vortexFactorRef.current;

      // Decay repulsion burst factor
      releaseFactorRef.current *= 0.9;
      if (releaseFactorRef.current < 0.01) releaseFactorRef.current = 0;

      // Reset rain front tracking each frame
      currentRainFront = 0;

      // Clear canvas with minimal trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; // Reduced trail effect
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      raindrops.forEach((drop) => {
        // Calculate distance to mouse
        const dx = drop.x - mouse.x;
        const dy = drop.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse influence: vortex or gentle deflection
        if (distance < MOUSE_INFLUENCE_RADIUS && mouse.x > -500) {
          if (vortexFactor > 0.01) {
            // ---- VORTEX MODE ---- // pull inward then swirl tangentially
            // ----- Vortex ring behaviour -----
            // Radial pull toward the drop's targetRadius band
            const radialDiff = distance - drop.targetRadius;
            const pullMag = radialDiff * RADIAL_PULL_FACTOR * vortexFactor;
            const pullX = (-dx / distance) * pullMag;
            const pullY = (-dy / distance) * pullMag;

            // Tangential swirl (perpendicular vector) with direction
            const tangentX = (-dy / distance) * drop.swirlSpeed * drop.swirlDirection * vortexFactor;
            const tangentY = (dx / distance) * drop.swirlSpeed * drop.swirlDirection * vortexFactor;

            drop.x += pullX + tangentX;
            drop.y += pullY + tangentY;

            // Occasionally respawn to keep fresh flow if stuck too close
            if (distance < 15 && vortexFactor > 0.8) {
              drop.y = -drop.length;
              drop.x = Math.random() * canvas.clientWidth;
              drop.originalX = drop.x;
              drop.history = [];
              drop.targetRadius = 30 + Math.random() * 50;
            }
          } else {
            // ---- NORMAL DEFLECTION ----
            const force = (MOUSE_INFLUENCE_RADIUS - distance) / MOUSE_INFLUENCE_RADIUS;
            const naturalVariance = 1 + (drop.deflectionVariance * 0.3);
            const deflectionX = (dx / distance) * DEFLECTION_STRENGTH * force * 0.03 * naturalVariance;
            const deflectionY = (dy / distance) * DEFLECTION_STRENGTH * force * 0.02 * naturalVariance;

            const turbulenceX = (Math.sin(Date.now() * 0.001 + drop.x * 0.01) * 0.2) * drop.deflectionVariance;
            const turbulenceY = (Math.cos(Date.now() * 0.0015 + drop.y * 0.008) * 0.15) * drop.deflectionVariance;

            // Extra outward burst right after vortex deactivates
            const burstMag = DEFLECTION_STRENGTH * 0.5 * releaseFactorRef.current;
            const burstX = (dx / distance) * burstMag;
            const burstY = (dy / distance) * burstMag;

            drop.x += deflectionX + turbulenceX + burstX;
            drop.y += deflectionY + turbulenceY + burstY;
          }
        } else {
          // Gradually return to original path when not influenced
          const returnForce = (drop.originalX - drop.x) * 0.0015; // even weaker so wind dominates
          drop.x += returnForce;
        }

        // Store previous position for natural trail direction
        drop.prevX = drop.x;
        drop.prevY = drop.y;
        
        // Update rain front depth
        if (drop.y > currentRainFront) currentRainFront = Math.min(drop.y, canvas.clientHeight);

        // Gradually accelerate newly spawned drops toward full speed
        drop.speedScale += (1 - drop.speedScale) * 0.02; // ease-up 2% each frame

        // Natural raindrop movement with subtle wobble and speed variation
        const time = Date.now() * 0.001;
        const wobble = Math.sin(time * 2 + drop.wobbleOffset) * 0.3 * drop.deflectionVariance;
        const speedMultiplier = drop.speedVariation + Math.sin(time * 0.5 + drop.wobbleOffset) * 0.1;
        
        // Move raindrop diagonally with natural wobble
        const angleRad = (drop.baseAngle * Math.PI) / 180;
        const effectiveSpeed = drop.speed * speedMultiplier * drop.speedScale * GLOBAL_SPEED_FACTOR;
        drop.y += effectiveSpeed;
        // Apply wind with same effectiveSpeed proportion
        drop.x += Math.sin(angleRad) * drop.speed * WIND_STRENGTH * drop.speedScale * GLOBAL_SPEED_FACTOR + wobble;
        
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
          // Progressive in-screen spawning: allow inside spawn up to current rain front depth
          if (Math.random() < 0.5 && currentRainFront > 10) {
            drop.y = Math.random() * currentRainFront;
          } else {
            drop.y = -drop.length;
          }
          
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
          drop.swirlSpeed = 1 + Math.random() * 2; // New swirl speed
          drop.swirlDirection = Math.random() < 0.5 ? -1 : 1;
          drop.targetRadius = 12 + Math.random() * 18;
          drop.speedScale = 0.5;
        }

        // ----- Smooth history-based tail drawing -----
        // Update history with current position
        const MAX_HISTORY = 12;
        drop.history.push({ x: drop.x, y: drop.y });
        if (drop.history.length > MAX_HISTORY) drop.history.shift();

        // Only draw if we have at least 2 points
        const historyLen = drop.history.length;
        if (historyLen > 1) {
          // Pre-calculate shimmer & dynamic length for width scaling
          const shimmer = Math.sin(time * 3 + drop.wobbleOffset) * 0.1 + 0.9;
          const speedFactor = speedMultiplier || 1;
          const LENGTH_MULT = 1.5; // 50% longer tails
          const dynamicLength = drop.length * (0.8 + speedFactor * 0.2) * LENGTH_MULT;

          const INTENSITY = 2; // Multiplier for width and brightness

          for (let i = 1; i < historyLen; i++) {
            const p1 = drop.history[i - 1];
            const p2 = drop.history[i];
            const t = i / historyLen; // 0 = tail, 1 = near head

            let lineWidth;
            let color;

            if (drop.trailType < 0.3) {
              // Sharp trail
              lineWidth = (0.4 + dynamicLength / 80) * t * INTENSITY;
              const alpha = Math.min(1, drop.opacity * t * shimmer * INTENSITY);
              color = `rgba(255, 255, 255, ${alpha})`;
            } else if (drop.trailType < 0.7) {
              // Tapered trail
              const taper = Math.pow(1 - t, drop.taperness);
              lineWidth = (0.6 + dynamicLength / 70) * taper * INTENSITY;
              const alpha = Math.min(1, drop.opacity * (0.1 + t * 0.9) * shimmer * INTENSITY);
              color = `rgba(168, 85, 247, ${alpha})`;
            } else {
              // Diffuse trail
              lineWidth = (0.8 + dynamicLength / 50) * t * INTENSITY;
              const alpha = Math.min(1, drop.opacity * (0.08 + 0.6 * t) * shimmer * INTENSITY);
              color = `rgba(139, 92, 246, ${alpha})`;
            }

            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = "round";

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }

          // Draw bright droplet head highlight for extra pop
          const headAlpha = Math.min(1, drop.opacity * 1.5 * INTENSITY);
          ctx.fillStyle = `rgba(255,255,255,${headAlpha})`;
          ctx.beginPath();
          ctx.arc(drop.x, drop.y, 1.5 + dynamicLength / 60, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw subtle mouse halo to indicate interaction zone
      if (mouse.x > -500 && mouse.x < canvas.clientWidth && mouse.y > 0 && mouse.y < canvas.clientHeight) {
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
    document.addEventListener("click", handleClick);

    // Start animation
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none
                 [@media(prefers-reduced-motion:reduce)]:hidden"
      style={{ opacity: 0.7 }} // Tuned for denser rain effect
    />
  );
} 