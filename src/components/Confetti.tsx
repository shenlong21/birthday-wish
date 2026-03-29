import React from 'react';
import { motion } from 'framer-motion';

const Confetti: React.FC = () => {
  const particles = Array.from({ length: 40 });

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', pointerEvents: 'none', zIndex: 20 }}>
      {particles.map((_, i) => {
        const angle = (i / particles.length) * 360;
        const radius = Math.random() * 200 + 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const char = i % 2 === 0 ? '✨' : '❤';
        const color = i % 2 === 0 ? 'var(--accent)' : 'var(--primary)';

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
            animate={{ 
              x, 
              y, 
              opacity: 0, 
              scale: Math.random() * 1.5 + 0.5,
              rotate: Math.random() * 360
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              position: 'absolute',
              fontSize: '1.5rem',
              color
            }}
          >
            {char}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Confetti;
