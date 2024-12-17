import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss']
})
export class cartpopupComponent {
  closecartpopup() {
    // Emit an event or use a service to close the cart-popup
    this.onClose.emit();
  }
}
