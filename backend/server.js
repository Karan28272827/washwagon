const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const customerController = require('./controller/customerController');
const paymentRoutes = require('./routes/payment.routes'); // Import payment routes

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Root route for server check
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Waswagon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// API route for creating a customer
app.post('/api/create-customer', customerController.createCustomer);

// Add payment API routes
app.use('/api/payments', paymentRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
