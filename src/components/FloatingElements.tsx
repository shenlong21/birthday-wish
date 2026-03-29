import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const elements = Array.from({ length: 15 });

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {elements.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: '110vh', 
            x: `${Math.random() * 100}vw`,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: '-10vh',
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, Math.random() * 45 - 22.5]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            delay: Math.random() * 20,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            color: i % 2 === 0 ? 'var(--primary-pink)' : 'var(--secondary-rose)',
            fontSize: `${Math.random() * 20 + 20}px`
          }}
        >
          {i % 3 === 0 ? '❤' : i % 3 === 1 ? '🎈' : '🌸'}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
