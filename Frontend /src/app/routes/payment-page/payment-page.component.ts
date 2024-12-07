import { Component } from '@angular/core';

@Component({
  selector: 'ww-payment-page',
  standalone: true,
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent {
  private apiUrl = 'http://localhost:3000/api/payments/process'; // Correct API URL

  processPayment() {
    console.log('Initiating payment...');

    const paymentData = {
      orderId: 123456, // Replace with dynamic order ID
      amount: 50.0, // Replace with dynamic amount
      currency: 'USD',
    };

    fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
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
