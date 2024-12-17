import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './cart-popup.component.html',
  styleUrl: './cart-popup.component.css'
})
export class ModalComponent {
  onClose: any;
  closeModal() {
    // Emit an event or use a service to close the modal
    this.onClose.emit();
  }
}