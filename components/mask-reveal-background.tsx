'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MaskRevealBackgroundProps {
  grayscaleImage: string;
  colorImage: string;
  spotlightRadius?: number;
  className?: string;
}

export function MaskRevealBackground({
  grayscaleImage,
  colorImage,
  spotlightRadius = 120,
  className = '',
}: MaskRevealBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 ${className}`}
    >
      {/* Base desaturated image */}
      <img
        src={grayscaleImage || "/placeholder.svg"}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter saturate-0"
      />

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/60 pointer-events-none" />

      {/* Color image with mask reveal */}
      <motion.div
        className="absolute inset-0"
        style={{
          maskImage: isHovered
            ? `radial-gradient(circle ${spotlightRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
            : 'radial-gradient(circle 0px at 50% 50%, black, transparent)',
          WebkitMaskImage: isHovered
            ? `radial-gradient(circle ${spotlightRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
            : 'radial-gradient(circle 0px at 50% 50%, black, transparent)',
          transition: 'mask-image 0.05s ease-out, -webkit-mask-image 0.05s ease-out',
        }}
      >
        <img
          src={colorImage || "/placeholder.svg"}
          alt="Revealed"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      {/* Enhanced glow effect with soft edge */}
      {isHovered && (
        <>
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              left: mousePosition.x - spotlightRadius,
              top: mousePosition.y - spotlightRadius,
              width: spotlightRadius * 2,
              height: spotlightRadius * 2,
              background: 'radial-gradient(circle, rgba(200, 200, 200, 0.15), transparent)',
              filter: 'blur(8px)',
            }}
          />
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: mousePosition.x - spotlightRadius,
              top: mousePosition.y - spotlightRadius,
              width: spotlightRadius * 2,
              height: spotlightRadius * 2,
              boxShadow: `inset 0 0 ${spotlightRadius}px rgba(200, 200, 200, 0.2), 0 0 ${spotlightRadius * 0.8}px rgba(200, 200, 200, 0.15)`,
              borderRadius: '50%',
            }}
            animate={{
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </>
      )}
    </div>
  );
}
