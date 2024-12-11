import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'ww-orders',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

// counter: number = 0;//initializinf the counbter

//  // Logic for handling button clicks (if needed)
//  increase() {
//   this.counter++
//   console.log("Increase clicked");
// }

// decrease() {
// if(this.counter > 0){
//   this.counter--;
//   console.log("Decrease clicked");
// }

orders = [
  {
    id: 1,
    image: 'images/orderpage_img.png',
    title: 'Order 1',
    description: 'Description for Order 1.',
    count: 0
  },
  {
    id: 2,
    image: 'images/landingpage.png',
    title: 'Order 2',
    description: 'Description for Order 2.',
    count: 0
    
  },
  {
    id: 3,
    image: 'images/orderpage_img2.png',
    title: 'Order 3',
    description: 'Description for Order 3.',
    count: 0
  }
];

// Method to increase the counter for a specific order
increase(order: any) {
  order.count++;
  console.log("Increase clicked for order:", order.id);
}

decrease(order: any) {
  if (order.count > 0) {
    order.count--;
    console.log("Decrease clicked for order:", order.id);
  }
}

handleOrderClick(id: number) {
  console.log('Order clicked:', id);
}

}
