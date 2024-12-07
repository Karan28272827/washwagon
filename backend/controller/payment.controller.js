const Payment = require('../models/payment');

// Dummy API for processing payment
const processPayment = async (req, res) => {
  try {
    const { orderId, amount, currency } = req.body;

    // Simulate payment processing
    console.log('Processing payment:', { orderId, amount, currency });

    // Save payment details to the database
    const payment = new Payment({
      orderId,
      amount,
      currency,
      paymentStatus: 'Success',
    });

    await payment.save();

    return res.status(200).json({
      message: 'Payment processed successfully',
      payment,
    });
  } catch (error) {
    console.error('Error processing payment:', error);
    return res.status(500).json({ message: 'Payment failed', error });
  }
};

module.exports = {
  processPayment,
};
