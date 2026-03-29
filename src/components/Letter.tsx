import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Letter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="letter" style={{ backgroundColor: 'var(--card-bg)', transition: 'background-color 0.3s' }}>
      <div className="container">
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
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="envelope-base">
            <div className="envelope-flap"></div>
            <div className="envelope-front-fold"></div>
            <div className="envelope-bottom-fold"></div>
            
            {/* The Heart Seal */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    position: 'absolute',
                    top: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    fontSize: '2.5rem',
                    color: 'white',
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    pointerEvents: 'none'
                  }}
                >
                  ❤
                </motion.div>
              )}
            </AnimatePresence>

            <div className="letter-inner">
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
