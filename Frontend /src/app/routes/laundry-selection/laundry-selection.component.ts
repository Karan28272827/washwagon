import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ww-laundry-selection',
  templateUrl: './laundry-selection.component.html',
  styleUrls: ['./laundry-selection.component.scss']
})
export class LaundrySelectionComponent {
  selectedService: string = '';

  constructor(private router: Router) {}

  selectService(service: string): void {
    this.selectedService = service;
  }

  proceedToPayment(): void {
    if (this.selectedService) {
      this.router.navigate(['/payment']);
    } else {
      alert('Please select a service first!');
    }
  }
}
