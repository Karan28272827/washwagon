import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent {

  // Replace with your actual API endpoint and key
  private apiUrl = 'https://api.paymentgateway.com/process';
  private apiKey = 'your-api-key-here';

  processPayment() {
    // Payment processing logic
    console.log('Initiating payment...');

    const paymentData = {
      orderId: 123456,
      amount: 50.00,
      currency: 'USD',
      apiKey: this.apiKey,
    };

    // Mock example to call the payment API (to be replaced with actual service)
    fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Payment successful:', data);
        alert('Payment processed successfully!');
      })
      .catch((error) => {
        console.error('Payment failed:', error);
        alert('There was an error processing your payment. Please try again.');
      });
  }
}
