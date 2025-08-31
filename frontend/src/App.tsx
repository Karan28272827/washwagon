import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import Services from './components/Services';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <Hero />
        <Services />
        {/* Add more sections here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
