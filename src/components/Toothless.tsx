import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toothless: React.FC = () => {
  const [isDiving, setIsDiving] = useState(false);
  const [showPlasma, setShowPlasma] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAction = () => {
    // Prevent click from bubbling if needed, but we want the user to be able to click through
    // if they aren't directly on the dragon silhouette.
    if (isDiving) return;
    setIsDiving(true);
    setTimeout(() => setShowPlasma(true), 300);
    setTimeout(() => setShowPlasma(false), 800);
    setTimeout(() => setIsDiving(false), 2000);
  };

  return (
    <div style={{ position: 'fixed', bottom: '50px', left: 0, width: '100vw', height: '300px', pointerEvents: 'none', zIndex: 50, overflow: 'hidden' }}>
      <motion.div
        animate={isDiving ? {
          x: ['0vw', '50vw', '100vw'],
          y: [0, 200, 0],
          rotate: [0, 360, 0],
          scale: [1, 1.4, 1]
        } : {
          x: ['-20vw', '120vw'],
          y: [0, 40, -40, 0],
          rotate: [5, -5, 5]
        }}
        transition={isDiving ? {
          duration: 2,
          ease: "easeInOut"
        } : {
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'absolute',
          width: '200px',
          height: '120px',
          pointerEvents: 'auto',
          cursor: 'pointer'
        }}
        onClick={handleAction}
        className={isHovered ? 'dragon-purring' : ''}
      >
        {/* Plasma Burst Surprise */}
        <AnimatePresence>
          {showPlasma && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 5, opacity: [0, 1, 0] }}
              exit={{ scale: 7, opacity: 0 }}
              style={{
                position: 'absolute',
                left: '85%',
                top: '40%',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #38BDF8, #1D4ED8, transparent)',
                boxShadow: '0 0 25px #38BDF8',
                zIndex: 49
              }}
            />
          )}
        </AnimatePresence>

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
          
          {/* Rider (Hiccup) */}
          <g transform="translate(90, 25)">
            <path d="M0 25 Q-5 15 0 5 Q5 15 0 25" fill="#1A1A1A" />
            <circle cx="0" cy="5" r="4" fill="#1A1A1A" />
            <motion.path 
              d="M0 15 L10 5" 
              stroke="#1A1A1A" 
              strokeWidth="2" 
              animate={isHovered ? { rotate: [0, -25, 0] } : {}}
              style={{ transformOrigin: '0px 15px' }}
            />
          </g>

          {/* Tail */}
          <path d="M65 50 Q40 45 20 60" stroke="#121212" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M20 60 L10 50 L10 70 Z" fill="#EF4444" />
          
          {/* Head */}
          <motion.g animate={isHovered ? { scale: 1.15 } : { scale: 1 }}>
            <circle cx="145" cy="45" r="12" fill="#121212" />
            <circle cx="148" cy="42" r="2.5" fill={isHovered ? "#86EFAC" : "#4ADE80"}>
              <animate attributeName="r" values="2.5;3.2;2.5" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="152" cy="45" r="2.5" fill={isHovered ? "#86EFAC" : "#4ADE80"}>
              <animate attributeName="r" values="2.5;3.2;2.5" dur="1.2s" repeatCount="indefinite" />
            </circle>
          </motion.g>
        </svg>

        {/* Purr Text */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                top: '-20px',
                right: '0px',
                color: 'var(--primary)',
                fontSize: '0.7rem',
                fontStyle: 'italic'
              }}
            >
              *purrr*
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Toothless;
