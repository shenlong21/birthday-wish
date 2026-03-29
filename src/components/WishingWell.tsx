import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from './Confetti';

const WishingWell: React.FC = () => {
  const [wished, setWished] = useState(false);
  const [ripples, setRipples] = useState<{ id: number, x: number, y: number }[]>([]);

  const handleWish = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = Date.now();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRipples(prev => [...prev, { id, x, y }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 1000);

    if (!wished) {
      setWished(true);
    }
  };

  return (
    <section id="wish" style={{ backgroundColor: 'var(--card-bg)', transition: 'background-color 0.4s' }}>
      <div className="container">
        <motion.h2 
          style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Make a Wish
        </motion.h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Drop a heart into the well and let the universe know...
        </p>

        <div style={{ position: 'relative' }}>
          <div className="well-pool" onClick={handleWish}>
            <AnimatePresence>
              {wished && <Confetti />}
            </AnimatePresence>

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ fontSize: '5rem', zIndex: 5, userSelect: 'none' }}
            >
              ❤
            </motion.div>

            {ripples.map(ripple => (
              <motion.div
                key={ripple.id}
                initial={{ width: 0, height: 0, opacity: 0.8 }}
                animate={{ width: 400, height: 400, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  left: ripple.x,
                  top: ripple.y,
                  transform: 'translate(-50%, -50%)',
                  border: '2px solid white',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  zIndex: 2
                }}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {wished && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginTop: '2rem' }}
            >
              <h3 className="romantic-script" style={{ fontSize: '3rem', color: 'var(--accent)' }}>
                Your wish is my command...
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
        
        {!wished && (
          <motion.p 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ marginTop: '1rem', opacity: 0.6, fontSize: '0.9rem' }}
          >
            (Tap the heart to make a wish)
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default WishingWell;
