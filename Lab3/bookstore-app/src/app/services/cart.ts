// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Book } from '../models/book';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItems: Book[] = [];
  
//   private cartCount = new BehaviorSubject<number>(0);
//   cartCount$ = this.cartCount.asObservable();

//   addToCart(book: Book) {
//     this.cartItems.push(book);
//     this.cartCount.next(this.cartItems.length);
//     console.log('Current Cart:', this.cartItems);
//   }

//   getCartItems() {
//     return this.cartItems;
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Book[] = [];
  
  // Observable stream for the cart count
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  addToCart(book: Book): void {
    this.cartItems.push(book);
    this.cartCount.next(this.cartItems.length);
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.cartCount.next(this.cartItems.length);
  }

  getCartItems(): Book[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}