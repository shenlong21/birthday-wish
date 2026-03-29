import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const photos = [
    { id: 1, text: "Our First Date: Ice cream ones", emoji: "🍧" },
    { id: 2, text: "That One Sunset: Diu beach tic-tak-teo game you always win", emoji: "🌅" },
    { id: 3, text: "Eats: Kahi bhi khane jana shamko", emoji: "🍴" },
    { id: 4, text: "Lazy Sundays: Pade rahane wale din", emoji: "☕" },
    { id: 5, text: "Celebrations: lol we do have but we enumerating needs my third neuron", emoji: "🥳" },
  ];

  return (
    <section id="gallery" style={{ backgroundColor: 'var(--background)', transition: 'background-color 0.3s' }}>
      <div className="container">
        <motion.h2 
          style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '3.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Favorite Moments
        </motion.h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem',
          width: '100%' 
        }}>
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                height: '380px',
                backgroundColor: 'var(--card-bg)',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--soft-shadow)',
                cursor: 'pointer',
                border: '1px solid rgba(0,0,0,0.05)',
                padding: '2rem'
              }}
            >
              <span style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{photo.emoji}</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                {photo.text}
              </h3>
              {/* <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontStyle: 'italic' }}>
              </p> */}
            </motion.div>
          ))}
        </div>

        <motion.div 
          style={{ marginTop: '6rem' }}
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
        >
          <h2 style={{ fontSize: '2.8rem', color: 'var(--primary)', fontWeight: 600 }}>
            To the chapters together...
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
