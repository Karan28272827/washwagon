import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './routes/landingPage/landingPage.component';
import { SignUpComponent } from './routes/sign-up/sign-up.component';  // Import SignUpComponent
import { LaundrySelectionComponent } from './routes/laundry-selection/laundry-selection.component'; // Import LaundrySelectionComponent
import { PaymentPageComponent } from './routes/payment-page/payment-page.component'; // Import PaymentPageComponent

export const routes: Routes = [
  { path: '', component: LandingPageComponent },                // Root path showing the Landing Page
  { path: 'sign-up', component: SignUpComponent },               // Path for Sign-Up Page
  { path: 'laundry-selection', component: LaundrySelectionComponent },  // Path for Laundry Service Selection
  { path: 'payment', component: PaymentPageComponent },         // Path for Payment Page (Under Construction)
  // Add any other routes for your application here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
