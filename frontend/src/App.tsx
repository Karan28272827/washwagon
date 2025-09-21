import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import GoogleLoginButton from './components/GoogleLoginButton';

const App: React.FC = () => {
  return (
    <div >
      <Header />
      <main style={{width: '100%'}}>
        <Hero />
        <Process />
        <Services />
        {/* Add more sections here */}
        <GoogleLoginButton />
      </main>
      <Footer />
    </div>
  );
};

export default App;
