import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LightningTendril: React.FC<{ index: number }> = ({ index }) => (
  <motion.path
    d={`M 0 0 Q ${Math.random() * 100 - 50} ${Math.random() * 100 - 50} ${Math.random() * 200 - 100} ${Math.random() * 200 - 100}`}
    stroke="var(--arcane-cyan)"
    strokeWidth="2"
    fill="none"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ 
      pathLength: [0, 1, 0], 
      opacity: [0, 1, 0],
      x: [0, Math.random() * 10 - 5, 0],
      y: [0, Math.random() * 10 - 5, 0]
    }}
    transition={{ 
      duration: 0.2 + Math.random() * 0.3, 
      repeat: Infinity, 
      delay: index * 0.5,
      repeatDelay: Math.random() * 2
    }}
  />
);

const ArcaneGem: React.FC = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [wished, setWished] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleGemClick = () => {
    if (isExploding) return;
    setIsExploding(true);
    setWished(true);
    setTimeout(() => setIsExploding(false), 2000);
  };

  const topFacets = [
    { rotateY: 0, rotateX: 35 },
    { rotateY: 90, rotateX: 35 },
    { rotateY: 180, rotateX: 35 },
    { rotateY: 270, rotateX: 35 },
  ];

  const bottomFacets = [
    { rotateY: 0, rotateX: -35 },
    { rotateY: 90, rotateX: -35 },
    { rotateY: 180, rotateX: -35 },
    { rotateY: 270, rotateX: -35 },
  ];

  const particles = Array.from({ length: 80 });

  return (
    <section id="arcane-gem" style={{ backgroundColor: 'var(--background)', overflow: 'hidden', minHeight: '90vh' }}>
      <div className={`container ${isExploding ? 'shake-intense' : ''}`}>
        <motion.h2 
          className={!wished && isHovered ? "unstable-energy" : ""}
          style={{ 
            fontSize: '3.5rem', 
            color: wished ? 'var(--arcane-purple)' : 'var(--arcane-blue)', 
            marginBottom: '1rem',
            textShadow: isHovered ? '0 0 20px var(--arcane-cyan)' : '0 0 10px rgba(56, 189, 248, 0.3)',
            transition: 'all 0.3s'
          }}
        >
          {wished ? "UNLEASHED" : "DANGER: ARCANE CORE"}
        </motion.h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '5rem', fontStyle: 'italic' }}>
          {wished ? "The magic is no longer contained." : "Volatile energy detected. Handle with extreme caution."}
        </p>

        <div className="gem-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          
          {/* Lightning Layer */}
          <svg style={{ position: 'absolute', width: '400px', height: '400px', pointerEvents: 'none', zIndex: 25 }}>
            <g transform="translate(200, 200)">
              {!wished && Array.from({ length: 6 }).map((_, i) => (
                <LightningTendril key={i} index={i} />
              ))}
            </g>
          </svg>

          {/* Energy Shockwave */}
          <AnimatePresence>
            {isExploding && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 15, opacity: 0 }}
                  style={{
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '10px solid var(--arcane-pink)',
                    filter: 'blur(5px)',
                    zIndex: 30,
                    pointerEvents: 'none'
                  }}
                />
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 12, opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '5px solid var(--arcane-cyan)',
                    zIndex: 30,
                    pointerEvents: 'none'
                  }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Particle Field (Sharp Shards) */}
          <AnimatePresence>
            {isExploding && particles.map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ 
                  x: (Math.random() - 0.5) * 1200, 
                  y: (Math.random() - 0.5) * 1200, 
                  rotate: 720,
                  opacity: 0,
                  scale: 0
                }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '25px',
                  background: i % 3 === 0 ? 'var(--arcane-pink)' : i % 3 === 1 ? 'var(--arcane-purple)' : 'var(--arcane-cyan)',
                  clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                  boxShadow: '0 0 15px white',
                  zIndex: 35,
                  pointerEvents: 'none'
                }}
              />
            ))}
          </AnimatePresence>

          {/* The Volatile 3D Gem */}
          <motion.div
            className={`gem-body ${!wished && isHovered ? 'unstable-energy' : ''}`}
            onClick={handleGemClick}
            animate={isExploding ? {
              scale: [1, 1.5, 0, 1],
              rotateY: [0, 0, 1080, 0],
            } : {
              rotateY: 360,
              rotateX: [15, -15, 15],
              x: isHovered ? [0, -2, 2, -1, 1, 0] : 0,
              y: isHovered ? [0, 1, -1, 2, -2, 0] : [0, -15, 0]
            }}
            transition={isExploding ? {
              duration: 1.2,
              times: [0, 0.3, 0.4, 1],
              ease: "easeInOut"
            } : {
              rotateY: { duration: isHovered ? 2 : 10, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 0.1, repeat: Infinity },
              y: isHovered ? { duration: 0.1, repeat: Infinity } : { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ cursor: 'pointer', zIndex: 40 }}
          >
            {/* Chromatic Aberration Layers (Visible on hover) */}
            {isHovered && !isExploding && (
              <div style={{ position: 'absolute', width: '100%', height: '100%', transform: 'translateX(3px)', opacity: 0.5, pointerEvents: 'none' }}>
                <div className="gem-facet top" style={{ background: 'var(--arcane-pink)', filter: 'blur(2px)' }} />
              </div>
            )}

            {/* Main Octahedron */}
            {topFacets.map((f, i) => (
              <div
                key={`top-${i}`}
                className="gem-facet top iridescent"
                style={{
                  transform: `rotateY(${f.rotateY}deg) rotateX(${f.rotateX}deg)`,
                  background: isHovered 
                    ? 'linear-gradient(135deg, var(--arcane-cyan), var(--arcane-purple))'
                    : 'linear-gradient(135deg, rgba(56, 189, 248, 0.7), rgba(168, 85, 247, 0.4))',
                  border: isHovered ? '2px solid white' : '1px solid rgba(255,255,255,0.3)'
                }}
              />
            ))}
            {bottomFacets.map((f, i) => (
              <div
                key={`bottom-${i}`}
                className="gem-facet bottom iridescent"
                style={{
                  transform: `rotateY(${f.rotateY}deg) rotateX(${f.rotateX}deg)`,
                  background: isHovered
                    ? 'linear-gradient(135deg, var(--arcane-purple), var(--arcane-pink))'
                    : 'linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(56, 189, 248, 0.3))',
                }}
              />
            ))}
            
            {/* Inner Core (Wild Magic Heart) */}
            <motion.div 
              animate={{ 
                scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: isHovered ? 0.2 : 1, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '50px',
                height: '50px',
                background: 'var(--wild-magic)',
                borderRadius: '50%',
                filter: 'blur(15px)',
                transform: 'translate(-50%, -50%)',
                zIndex: 5
              }} 
            />
          </motion.div>

          {/* Aggressive Floating Debris */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: -360,
                x: Math.cos((i * 90) * (Math.PI / 180)) * 200,
                y: Math.sin((i * 90) * (Math.PI / 180)) * 200,
              }}
              transition={{ duration: isHovered ? 2 : 8, repeat: Infinity, ease: "linear" }}
              style={{ position: 'absolute' }}
            >
              <div style={{
                width: '10px',
                height: '10px',
                background: 'white',
                boxShadow: '0 0 10px var(--arcane-cyan)',
                rotate: '45deg'
              }} />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {wished && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{ marginTop: '4rem' }}
            >
              <h3 className="romantic-script" style={{ fontSize: '4rem', color: 'var(--arcane-pink)', textShadow: '0 0 30px var(--arcane-pink)' }}>
                Destiny Unleashed.
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArcaneGem;
