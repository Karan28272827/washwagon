import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private baseUrl = 'http://localhost:3000/api/create-customer'; // Base API URL

  constructor(private http: HttpClient) {}

  /**
   * Method to create a customer.
   * @param customerData - Data for the customer to be created.
   * @returns Observable of the HTTP response.
   */
  createCustomer(customerData: any): Observable<any> {
    return this.http.post(this.baseUrl, customerData); // No need for `/create-customer` here
  }

  /**
   * Method to create a collection.
   * @param collectionName - Name of the collection to be created.
   * @returns Observable of the HTTP response.
   */
  createCollection(collectionName: string): Observable<any> {
    const endpoint = `${this.baseUrl}`;
    const collectionData = { name: collectionName };
    return this.http.post(endpoint, collectionData);
  }
}
