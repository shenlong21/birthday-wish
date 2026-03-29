import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toothless: React.FC = () => {
  const [isDiving, setIsDiving] = useState(false);
  const [showPlasma, setShowPlasma] = useState(false);

  const handleAction = () => {
    if (isDiving) return;
    setIsDiving(true);
    setTimeout(() => setShowPlasma(true), 300);
    setTimeout(() => setShowPlasma(false), 800);
    setTimeout(() => setIsDiving(false), 2000);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', pointerEvents: 'none' }}>
      <motion.div
        animate={isDiving ? {
          x: ['0vw', '50vw', '100vw'],
          y: [0, 200, 0],
          rotate: [0, 360, 0],
          scale: [1, 1.5, 1]
        } : {
          x: ['-20vw', '120vw'],
          y: [0, 50, -50, 0],
          rotate: [5, -5, 5]
        }}
        transition={isDiving ? {
          duration: 2,
          ease: "easeInOut"
        } : {
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          width: '180px',
          height: '100px',
          zIndex: 50,
          cursor: 'pointer',
          pointerEvents: 'auto'
        }}
        onClick={handleAction}
      >
        {/* Plasma Burst Surprise */}
        <AnimatePresence>
          {showPlasma && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 4, opacity: [0, 1, 0] }}
              exit={{ scale: 6, opacity: 0 }}
              style={{
                position: 'absolute',
                left: '80%',
                top: '40%',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #38BDF8, #1D4ED8, transparent)',
                boxShadow: '0 0 20px #38BDF8',
                zIndex: 49
              }}
            />
          )}
        </AnimatePresence>

        {/* Toothless SVG */}
        <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.3))' }}>
          {/* Wings */}
          <motion.path
            d="M100 50 Q130 10 170 30 Q150 50 100 50"
            fill="#1A1A1A"
            animate={{ d: ["M100 50 Q130 10 170 30 Q150 50 100 50", "M100 50 Q130 80 170 60 Q150 50 100 50"] }}
            transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M100 50 Q70 10 30 30 Q50 50 100 50"
            fill="#1A1A1A"
            animate={{ d: ["M100 50 Q70 10 30 30 Q50 50 100 50", "M100 50 Q70 80 30 60 Q50 50 100 50"] }}
            transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Body */}
          <path d="M60 50 Q100 30 140 50 Q100 70 60 50" fill="#121212" />
          
          {/* Head */}
          <circle cx="145" cy="45" r="12" fill="#121212" />
          
          {/* Glowing Eyes */}
          <circle cx="148" cy="42" r="2" fill="#4ADE80">
            <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="152" cy="45" r="2" fill="#4ADE80">
            <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
          </circle>
          
          {/* Tail */}
          <path d="M65 50 Q40 45 20 60" stroke="#121212" strokeWidth="6" fill="none" strokeLinecap="round" />
          {/* Red Tail Fin (HTTYD Reference) */}
          <path d="M20 60 L10 50 L10 70 Z" fill="#EF4444" />
        </svg>
      </motion.div>

      <div style={{ position: 'absolute', bottom: '2rem', width: '100%', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem', fontStyle: 'italic', pointerEvents: 'none' }}>
        (Look! A Night Fury is patrolling your wishes...)
      </div>
    </div>
  );
};

export default Toothless;
