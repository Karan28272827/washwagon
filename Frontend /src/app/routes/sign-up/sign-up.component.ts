import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service'; // Import DatabaseService
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ww-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule], // Include CommonModule here
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  message: string = ''; // For success or error messages

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private databaseService: DatabaseService  // Inject DatabaseService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Validate 10-digit phone number
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Form Submitted:', this.signUpForm.value);

      // Create customer data
      const customerData = this.signUpForm.value;

      // Call the DatabaseService to create a customer
      this.databaseService.createCustomer(customerData).subscribe(
        (response) => {
          console.log('Customer created successfully:', response);
          this.message = 'Customer created successfully!';

          // Navigate to laundry selection page
          this.navigateToLaundrySelection();
        },
        (error) => {
          console.error('Error creating customer:', error);
          this.message = 'Error creating customer. Please try again.';
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

  navigateToLaundrySelection() {
    this.router.navigate(['/laundry-selection']);
  }
}
