import React from 'react';
import { motion } from 'framer-motion';

const OurFuture: React.FC = () => {
  const milestones = [
    { id: 1, title: "Next Big Trip", desc: "Exploring new horizons and creating memories in distant lands.", emoji: "✈️" },
    { id: 2, title: "Our Dream Home", desc: "A cozy place filled with laughter, love, and a kitchen for our experiments.", emoji: "🏡" },
    { id: 3, title: "Endless Adventures", desc: "From small weekend getaways to life's biggest milestones.", emoji: "🌟" },
    { id: 4, title: "Forever & Always", desc: "Growing old together, still holding hands and sharing jokes.", emoji: "♾️" },
  ];

  return (
    <section id="future" style={{ backgroundColor: 'var(--background)', transition: 'background-color 0.4s' }}>
      <div className="container">
        <motion.h2 
          style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Future Journey
        </motion.h2>

        <div className="timeline-container">
          {milestones.map((item, index) => (
            <div key={item.id} className={`timeline-item ${index % 2 === 0 ? '' : 'even'}`}>
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>{item.emoji}</span>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{item.desc}</p>
              </motion.div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFuture;
