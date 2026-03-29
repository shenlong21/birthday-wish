import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" style={{ zIndex: 1, position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container"
      >
        <motion.h1 
          style={{ fontSize: 'clamp(3.5rem, 12vw, 7rem)', color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: 1.1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          Happy Birthday, <br/>Laddoooo!
        </motion.h1>
        <motion.p 
          style={{ fontSize: '1.4rem', maxWidth: '650px', margin: '0 auto 3.5rem auto', color: 'var(--text-main)', fontStyle: 'italic', fontWeight: 300 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          To the person who makes every day feel like a celebration. 
          Today is all about you and the magic you bring into my life.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button onClick={() => document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' })}>
            Open My Letter
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
