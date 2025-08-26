import React from 'react';
// import Bookings from './pages/bookings';
import Header from './components/Header';
import Footer from './components/Footer';

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
        <h2>Welcome to Laundry Booking</h2>
        <p>Your simple and efficient laundry service management app.</p>
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
  maxWidth: '800px',
  margin: '2rem auto',
  padding: '0 1rem',
  textAlign: 'center',
};

export default App;
