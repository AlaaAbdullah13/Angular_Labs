
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(book: Book) {
    const existingItem = this.cartItems.find(item => item.id === book.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...book, quantity: 1 });
    }
    this.cartSubject.next([...this.cartItems]);
  }


  updateQuantity(bookId: string, delta: number) {
  const item = this.cartItems.find(i => i.id === bookId);
  if (item) {
    const newQuantity = item.quantity + delta;

    if (delta > 0 && newQuantity > item.stock) {
      alert(`Only ${item.stock} copies available in stock!`);
      return;
    }

    item.quantity = newQuantity;
    if (item.quantity <= 0) {
      this.removeFromCart(bookId);
    } else {
      this.cartSubject.next([...this.cartItems]);
    }
  }
}

  removeFromCart(bookId: string) {
    this.cartItems = this.cartItems.filter(item => item.id !== bookId);
    this.cartSubject.next([...this.cartItems]);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}