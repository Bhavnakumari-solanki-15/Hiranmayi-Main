'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function FloatingLeaves() {
  const [mounted, setMounted] = useState(false);
  const leaves = Array.from({ length: 8 });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            x: Math.random() * 100 + '%',
            y: '-10%',
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            opacity: [0, 0.4, 0.4, 0],
            y: '110%',
            x: (Math.random() * 20 - 10) + Math.random() * 100 + '%',
            rotate: 360,
          }}
          transition={{ 
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute"
          style={{
            filter: 'blur(2px)',
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 5C20 5 15 15 5 20C15 25 20 35 20 35C20 35 25 25 35 20C25 15 20 5 20 5Z"
              fill="#1B5E20"
              fillOpacity="0.2"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
