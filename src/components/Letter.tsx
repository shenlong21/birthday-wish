import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from './Confetti';

const Letter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowConfetti(true), 400);
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      setIsOpen(false);
      setShowConfetti(false);
    }
  };

  return (
    <section id="letter" style={{ backgroundColor: 'var(--background)', transition: 'background-color 0.4s' }}>
      <div className="container" style={{ position: 'relative' }}>
        {showConfetti && <Confetti />}
        
        <motion.h2 
          style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A Special Note For You
        </motion.h2>

        <div 
          className={`envelope-container ${isOpen ? 'open' : ''}`}
          onClick={handleOpen}
        >
          <div className="envelope-base">
            <div className="envelope-flap"></div>
            <div className="envelope-front-fold"></div>
            <div className="envelope-bottom-fold"></div>
            
            {/* The Luxury Wax Seal */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, rotate: -45 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 1.5, opacity: 0, filter: 'blur(10px)' }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  style={{
                    position: 'absolute',
                    top: '30px',
                    left: '50%',
                    marginLeft: '-30px',
                    zIndex: 10,
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'var(--accent)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3), inset 0 0 10px rgba(0,0,0,0.2)',
                    border: '2px solid rgba(255,255,255,0.2)',
                    pointerEvents: 'none'
                  }}
                >
                  ❤
                </motion.div>
              )}
            </AnimatePresence>

            <div className="letter-inner" style={{ width: '500px', left: '25px' }}>
              <h3>To My Dearest,</h3>
              <p>Happy Birthday! I wanted to take a moment to tell you how much you mean to me.</p>
              <p>You are the most incredible person I've ever known. Your kindness, your laugh, and the way you see the world never fail to amaze me.(AI hai AI)</p>
              <p>I know you have so much in your plate right now. The office work and then ghar ka sab. I tried to be a good peaceful place for you, even tho not always but kabhi kabhi. Giving you the space and support i can give. Lets keep rolling...</p>
              <p>So kal dhurandhar or maybe bowling? After the morning routine.. :)</p>
              <p style={{ fontFamily: 'Great Vibes', fontSize: '1.8rem', textAlign: 'right', color: 'var(--primary)', marginTop: '2rem' }}>2 neuron person</p>
            </div>
          </div>
        </div>
        
        <motion.p 
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-muted)' }}
        >
          {isOpen ? '(Click to close)' : '(Click to open my heart)'}
        </motion.p>
      </div>
    </section>
  );
};

export default Letter;
