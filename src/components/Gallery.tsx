import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const photos = [
    // Tip: Replace these with real image paths (e.g., img: "/photos/date.jpg")
    { id: 1, text: "Our First Date: well its hard to say that first ice cream invite as the first, but after that all things were smooth so not actually the first ones of the first...", color: "#FEE2E2" },
    { id: 2, text: "That One Sunset: maybe that diu beach.... other time there is not that much sunset like....", color: "#FFEDD5" },
    { id: 3, text: "Travels: Actually planning to travel", color: "#FEF9C3" },
    { id: 4, text: "Lazy Sundays: Pade rahane wale days...", color: "#F0FDFA" },
    { id: 5, text: "Celebrations: lol we do have but we enumerating needs my third neuron", color: "#F5F3FF" },
    // { id: 6, text: "", color: "#FDF2F8" },
  ];

  return (
    <section id="gallery" style={{ zIndex: 1 }}>
      <div className="container">
        <motion.h2 
          style={{ fontSize: '4rem', color: 'var(--primary-pink)', marginBottom: '3rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our Favorite Moments
        </motion.h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          width: '100%' 
        }}>
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                height: '350px',
                backgroundColor: photo.color,
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--soft-shadow)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                border: '4px solid white'
              }}
            >
              <span className="romantic-script" style={{ fontSize: '2.5rem', color: 'var(--deep-maroon)' }}>
                {photo.text}
              </span>
              <div style={{ 
                position: 'absolute', 
                bottom: '1rem', 
                right: '1rem', 
                fontSize: '1.5rem',
                opacity: 0.3
              }}>
                ❤
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          style={{ marginTop: '5rem' }}
          whileInView={{ opacity: [0, 1] }}
        >
          <h2 style={{ fontSize: '3rem', color: 'var(--primary-pink)' }}>
            And many more to come...
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
