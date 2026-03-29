import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ArcaneGem: React.FC = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [wished, setWished] = useState(false);

  const handleGemClick = () => {
    if (isExploding) return;
    
    setIsExploding(true);
    setWished(true);
    
    // Reset explosion after animation
    setTimeout(() => setIsExploding(false), 2000);
  };

  const shards = Array.from({ length: 6 });
  const particles = Array.from({ length: 50 });

  return (
    <section id="arcane-gem" style={{ backgroundColor: 'var(--background)', overflow: 'hidden', position: 'relative' }}>
      <div className="container">
        <motion.h2 
          style={{ fontSize: '3rem', color: 'var(--arcane-blue)', marginBottom: '1rem', textShadow: '0 0 10px var(--arcane-blue)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {wished ? "The Arcane Has Spoken" : "Touch the Hextech Core"}
        </motion.h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '4rem' }}>
          {wished ? "Your destiny is intertwined with the magic." : "Focus your intent and channel the energy..."}
        </p>

        <div style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
          
          {/* Energy Shockwave */}
          <AnimatePresence>
            {isExploding && (
              <motion.div
                initial={{ scale: 0, opacity: 1, border: '4px solid var(--arcane-cyan)' }}
                animate={{ scale: 8, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  zIndex: 10,
                  pointerEvents: 'none'
                }}
              />
            )}
          </AnimatePresence>

          {/* Particles Burst */}
          <AnimatePresence>
            {isExploding && particles.map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ 
                  x: (Math.random() - 0.5) * 800, 
                  y: (Math.random() - 0.5) * 800, 
                  opacity: 0,
                  scale: 0
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  backgroundColor: i % 2 === 0 ? 'var(--arcane-blue)' : 'var(--arcane-purple)',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px var(--arcane-cyan)',
                  zIndex: 15,
                  pointerEvents: 'none'
                }}
              />
            ))}
          </AnimatePresence>

          {/* The Gem Core */}
          <motion.div
            onClick={handleGemClick}
            animate={isExploding ? {
              scale: [1, 0.2, 2.5, 1],
              rotate: [0, 0, 720, 0],
            } : {
              scale: [1, 1.05, 1],
              rotate: 360
            }}
            transition={isExploding ? {
              duration: 1.5,
              times: [0, 0.2, 0.5, 1],
              ease: "easeInOut"
            } : {
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            style={{
              width: '120px',
              height: '120px',
              background: 'radial-gradient(circle, var(--arcane-cyan), var(--arcane-blue), var(--arcane-purple))',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // Unstable shape
              boxShadow: '0 0 50px var(--arcane-blue), inset 0 0 20px rgba(255,255,255,0.5)',
              cursor: 'pointer',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.1, repeat: Infinity }}
              style={{ width: '40%', height: '40%', backgroundColor: 'white', borderRadius: '50%', filter: 'blur(5px)' }} 
            />
          </motion.div>

          {/* Floating Shards */}
          {shards.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
                x: Math.cos((i * 60) * (Math.PI / 180)) * 140,
                y: Math.sin((i * 60) * (Math.PI / 180)) * 140,
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ position: 'absolute', zIndex: 18 }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotateX: [0, 180, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: '30px',
                  height: '50px',
                  backgroundColor: 'rgba(56, 189, 248, 0.3)',
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  border: '1px solid var(--arcane-cyan)',
                  backdropFilter: 'blur(5px)',
                  boxShadow: '0 0 15px var(--arcane-blue)'
                }}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {wished && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ marginTop: '3rem' }}
            >
              <h3 className="romantic-script" style={{ fontSize: '3.5rem', color: 'var(--arcane-blue)', textShadow: '0 0 15px var(--arcane-blue)' }}>
                Magic is within you.
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArcaneGem;
