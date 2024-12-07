const bcrypt = require('bcryptjs');
const Customer = require('../models/customer');

// Create a new customer
const createCustomer = async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Validate the input
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: 'Name, email, phone, and password are required' });
  }

  try {
    // Check if the customer already exists
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ error: 'Customer already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new customer with hashed password
    const customer = new Customer({ name, email, phone, password: hashedPassword });
    await customer.save();

    // Exclude password from the response
    const customerResponse = customer.toObject();
    delete customerResponse.password;

    res.status(201).json({ message: 'Customer created successfully', customer: customerResponse });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

module.exports = { createCustomer };
