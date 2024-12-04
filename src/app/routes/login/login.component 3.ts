import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Import NgIf

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [NgIf], 
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
