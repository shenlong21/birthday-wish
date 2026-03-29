import React from 'react';
import { motion } from 'framer-motion';

interface ThemeSwitcherProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, setTheme }) => {
  const themes = [
    { id: 'romantic', label: '🌸', title: 'Romantic' },
    { id: 'midnight', label: '✨', title: 'Midnight' },
    { id: 'golden', label: '☀️', title: 'Golden' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 100,
        backgroundColor: 'var(--card-bg)',
        padding: '0.5rem',
        borderRadius: '50px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        display: 'flex',
        gap: '0.5rem',
        border: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      {themes.map((theme) => (
        <motion.button
          key={theme.id}
          onClick={() => setTheme(theme.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={theme.title}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            fontSize: '1.2rem',
            backgroundColor: currentTheme === theme.id ? 'var(--primary)' : 'transparent',
            color: currentTheme === theme.id ? 'white' : 'var(--text-main)',
            boxShadow: 'none',
          }}
        >
          {theme.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ThemeSwitcher;
