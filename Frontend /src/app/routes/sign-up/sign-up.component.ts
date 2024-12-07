import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ww-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  providers: [DatabaseService], // Register custom services here
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private databaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Form Submitted:', this.signUpForm.value);

      const customerData = this.signUpForm.value;

      this.databaseService.createCustomer(customerData).subscribe(
        (response) => {
          console.log('Customer created successfully:', response);
          this.message = 'Customer created successfully!';
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
