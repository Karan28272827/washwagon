import React, { useState, useEffect } from 'react';
import API from '../api';  // Import your axios instance from src/api.js

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get('/api/bookings')  // Adjust to your backend bookings endpoint
      .then(response => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch bookings.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Bookings</h1>
      <ul>
        {bookings.length > 0 ? (
          bookings.map(b => (
            <li key={b.id}>
              {b.customer_name} - {b.pickup_date} - {b.status}
            </li>
          ))
        ) : (
          <li>No bookings found</li>
        )}
      </ul>
    </div>
  );
}

export default Bookings;
