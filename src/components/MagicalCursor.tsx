import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MagicalCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ id: number, x: number, y: number, char: string }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (Math.random() > 0.7) {
        const id = Date.now();
        const chars = ['✨', '⭐', '🌸', '❤'];
        const char = chars[Math.floor(Math.random() * chars.length)];
        setTrail(prev => [...prev.slice(-15), { id, x: e.clientX, y: e.clientY, char }]);
        
        setTimeout(() => {
          setTrail(prev => prev.filter(item => item.id !== id));
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        body { cursor: none !important; }
        @media (max-width: 768px) { body { cursor: auto !important; } }
      `}</style>
      
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
        {/* Main Cursor Dot */}
        <motion.div
          animate={{ x: mousePosition.x - 10, y: mousePosition.y - 10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary)',
            mixBlendMode: 'difference',
            position: 'absolute'
          }}
        />
        
        {/* Sparkle Trail */}
        {trail.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 1, scale: 0.5, x: item.x, y: item.y }}
            animate={{ opacity: 0, scale: 1.5, y: item.y - 20 }}
            style={{
              position: 'absolute',
              fontSize: '1rem',
              pointerEvents: 'none'
            }}
          >
            {item.char}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default MagicalCursor;
