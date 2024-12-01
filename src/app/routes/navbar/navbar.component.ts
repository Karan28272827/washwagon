import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [LoginComponent], // Only import LoginComponent here
})
export class NavbarComponent {
  @ViewChild(LoginComponent) loginComponent!: LoginComponent;

  constructor(private router: Router) {}

  openLogin() {
    this.loginComponent?.openLoginModal();
  }

  openSignUp() {
    // Navigate to the sign-up page
    this.router.navigate(['/sign-up']);
  }
}
