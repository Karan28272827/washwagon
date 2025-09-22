import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Process from './components/Process/Process';
import Services from './components/Services';
import Results from "./components/Results/Results";
import Reviews from './components/Reviews/Reviews';
import GoogleLoginButton from './components/GoogleLoginButton';

const App: React.FC = () => {
  return (
    <div >
      <Header />
      <main style={{width: '100%'}}>
        <Hero />
        <Process />
        <Results />
        <Reviews />
        <Services />
        {/* Add more sections here */}
        <GoogleLoginButton />
      </main>
      <Footer />
    </div>
  );
};

export default App;
