const Customer = require('../models/customer');

// Route to add a new customer
async function createCustomer(req, res) {
    try {
        const { name, email, phone, address } = req.body;

        // Validation
        if (!name || !email || !phone) {
            return res.status(400).json({ error: 'Name, email, and phone are required' });
        }

        // Check if email already exists
        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({ error: 'Email is already in use' });
        }

        // Create a new customer
        const newCustomer = new Customer({ name, email, phone, address });
        await newCustomer.save();

        res.status(201).json({ message: 'Customer created successfully', customer: newCustomer });
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}

module.exports = { createCustomer };
