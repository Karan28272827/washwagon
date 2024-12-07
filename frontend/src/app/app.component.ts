import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './routes/footer/footer.component';
import { NavbarComponent } from './routes/navbar/navbar.component';
import { DatabaseService } from './routes/database.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import both FormsModule and ReactiveFormsModule
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // FormBuilder and Validators
import { OrdersComponent } from './routes/orders/orders.component';

@Component({
  selector: 'ww-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, FormsModule, ReactiveFormsModule, OrdersComponent],  // Add ReactiveFormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'laundry';
  signUpForm!: FormGroup; // Define the form group
  message: string = '';
  createCustomer: string = '';

  constructor(
    private databaseService: DatabaseService,
    private fb: FormBuilder // Inject FormBuilder for form creation
  ) {}

  ngOnInit(): void {
    // Initialize the form with necessary fields
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Method to create a collection (customer in this case)
  onSubmit(): void {
    if (this.signUpForm.valid) {
      const customerData = this.signUpForm.value; // Get form values

      // Call the createCustomer method from DatabaseService and pass the form data
      this.databaseService.createCustomer(customerData).subscribe(
        (response) => {
          this.message = response.message; // Success response
        },
        (error) => {
          this.message = error.error; // Error response
        }
      );
    } else {
      this.message = 'Form is invalid'; // Handle form validation error
    }
  }


}
