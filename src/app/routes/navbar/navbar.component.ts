import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [LoginComponent], // Import LoginComponent here
})
export class NavbarComponent {
  @ViewChild(LoginComponent) loginComponent!: LoginComponent;

  openLogin() {
    this.loginComponent?.openLoginModal();
  }
}
