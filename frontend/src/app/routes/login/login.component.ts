import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ww-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule],
})
export class LoginComponent {
  showLoginModal = false;

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

  login() {
    console.log('Login logic goes here');
    this.closeLoginModal();
  }
}
