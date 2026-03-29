import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Letter from './components/Letter';
import Gallery from './components/Gallery';
import ArcaneGem from './components/ArcaneGem';
import Toothless from './components/Toothless';
import FloatingElements from './components/FloatingElements';
import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
  const [theme, setTheme] = useState('romantic');

  useEffect(() => {
    // Add theme class to body for global variable support
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className={`App theme-${theme}`}>
      <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
      <FloatingElements />
      <Hero />
      <Letter />
      <Gallery />
      <ArcaneGem />
      <Toothless />
      
      <footer style={{ 
        padding: '3rem', 
        textAlign: 'center', 
        opacity: 0.6, 
        fontSize: '0.9rem',
        backgroundColor: 'var(--background)',
        color: 'var(--text-main)',
        transition: 'background-color 0.3s, color 0.3s'
      }}>
        <p>Created with love for a very special person. Happy Birthday! ❤</p>
      </footer>
    </div>
  );
};

export default App;
