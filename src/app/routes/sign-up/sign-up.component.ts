import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'], // Corrected styleUrls
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // This method will be triggered on form submission
  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Form Submitted:', this.signUpForm.value);
      // Implement your form submission logic here (e.g., call a service)

      // Now, call the custom function to navigate to the laundry selection page
      this.navigateToLaundrySelection();
    } else {
      console.log('Form is not valid');
      // Handle invalid form (e.g., show error messages)
    }
  }

  // Custom function to handle navigation after the form is submitted
  navigateToLaundrySelection() {
    // Navigate to the laundry selection page
    this.router.navigate(['/laundry-selection']);
  }
}
