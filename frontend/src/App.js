import React from 'react';
// import Bookings from './pages/bookings';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';

// function App() {
//   return (
//     <div className="App">
//       <Bookings />
//     </div>
//   );
// }

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <main style={mainStyle}>
        <Hero />
        <Services />
        {/* Other containers will go here below the hero */}
      </main>
      <Footer />
    </div>
  );
}

const appStyle = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: '#333',
};

const mainStyle = {
  flex: 1,
  width: '100%',
  margin: '0 auto',
};

export default App;
