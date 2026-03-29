import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Letter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="letter" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <motion.h2 
          style={{ fontSize: '4rem', color: 'var(--primary-pink)', marginBottom: '3rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          A Special Note For You
        </motion.h2>

        <div 
          className={`envelope-wrapper ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="envelope">
            <div className="envelope-top"></div>
            <div className="envelope-left"></div>
            <div className="envelope-right"></div>
            <div className="envelope-front"></div>
            <div className="letter-content">
              <h3>To My Dearest,</h3>
              <p>Happy Birthday! I wanted to take a moment to tell you how much you mean to me.</p>
              <p>You are the most incredible person I've ever known. Your kindness, your laugh, and the way you see the world never fail to amaze me.</p>
              <p>I feel so lucky to be by your side as you start this new chapter. May your year be filled with as much joy and love as you give to everyone around you.</p>
              <p>I love you more than words can say.</p>
              <p style={{ fontFamily: 'Great Vibes', fontSize: '1.5rem', textAlign: 'right' }}>Forever Yours</p>
            </div>
          </div>
        </div>
        
        <p style={{ marginTop: '2rem', opacity: 0.7 }}>
          {isOpen ? '(Click to close)' : '(Click to open)'}
        </p>
      </div>
    </section>
  );
};

export default Letter;
