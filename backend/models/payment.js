const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'inr',
  },
  paymentStatus: {
    type: String,
    default: 'Pendin',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Payment', paymentSchema);
