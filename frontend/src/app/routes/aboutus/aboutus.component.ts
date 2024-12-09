import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ww-aboutus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent {
  teamMembers = [
    { name: 'Alice', role: 'CEO' },
    { name: 'Bob', role: 'Developer' },
    { name: 'Charlie', role: 'Designer' },
  ];
}
