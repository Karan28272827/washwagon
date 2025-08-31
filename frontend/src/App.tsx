import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import Services from './components/Services';

const App: React.FC = () => {
  return (
    <div >
      <Header />
      <main style={{maxWidth: '1635px'}}>
        <Hero />
        <Services />
        {/* Add more sections here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
