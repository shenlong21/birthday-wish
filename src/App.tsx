import React from 'react';
import Hero from './components/Hero';
import Letter from './components/Letter';
import Gallery from './components/Gallery';
import FloatingElements from './components/FloatingElements';

const App: React.FC = () => {
  return (
    <div className="App">
      <FloatingElements />
      <Hero />
      <Letter />
      <Gallery />
      
      <footer style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        opacity: 0.6, 
        fontSize: '0.8rem',
        backgroundColor: 'var(--pastel-pink)'
      }}>
        <p>Created with love for a very special person. Happy Birthday! ❤</p>
      </footer>
    </div>
  );
};

export default App;
