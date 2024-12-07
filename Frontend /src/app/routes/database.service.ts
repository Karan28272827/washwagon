import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private baseUrl = 'http://localhost:3000/api'; // Base API URL

  constructor(private http: HttpClient) {}

  /**
   * Method to create a customer.
   * @param customerData - Data for the customer to be created.
   * @returns Observable of the HTTP response.
   */
  createCustomer(customerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-customer`, customerData);
  }

  /**
   * Method to create a collection.
   * @param collectionName - Name of the collection to be created.
   * @returns Observable of the HTTP response.
   */
  createCollection(collectionName: string): Observable<any> {
    const collectionData = { name: collectionName };
    return this.http.post(`${this.baseUrl}/create-collection`, collectionData);
  }

  /**
   * Method to process payment.
   * @param paymentData - Data for the payment to be processed.
   * @returns Observable of the HTTP response.
   */
  processPayment(paymentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/payments/process`, paymentData);
  }
}
