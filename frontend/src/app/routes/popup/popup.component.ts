import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onCloseAndRedirect() {
    this.onClose();  // Call the existing onClose method
    window.location.href = '#onclick';  // Redirect to the target section
  }
}
