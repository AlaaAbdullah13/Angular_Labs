// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common'; 
// import { RouterLink } from '@angular/router'; 
// import { Book } from '../../models/book';
// import { CartService } from '../../services/cart';
// import { DiscountPipe } from '../../pipes/discount-pipe'; 

// @Component({
//   selector: 'app-book-card',
//   standalone: true,
//   // ADD THESE TO YOUR IMPORTS ARRAY:
//   imports: [CommonModule, RouterLink, DiscountPipe], 
//   templateUrl: './book-card.html',
//   styleUrl: './book-card.css'
// })
// export class BookCardComponent {
//   @Input() book!: Book;

//   constructor(private cartService: CartService) {}

//   onAddToCart() {
//     this.cartService.addToCart(this.book);
//   }
// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 
import { Book } from '../../models/book';
import { CartService } from '../../services/cart'; // Make sure it's .service
import { DiscountPipe } from '../../pipes/discount.pipe'; // Make sure it's .pipe

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, RouterLink, DiscountPipe], 
  templateUrl: './book-card.html',
  styleUrl: './book-card.css'
})
export class BookCardComponent {
  @Input() book!: Book;

  constructor(private cartService: CartService) {}

  onAddToCart() {
    this.cartService.addToCart(this.book);
    
  }
}