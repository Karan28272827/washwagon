const mongoose = require('mongoose');

// Define schema for a customer
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create a model from the schema
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
