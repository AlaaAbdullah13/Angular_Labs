import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';
import { Book } from '../../models/book';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html'
})
export class CartComponent implements OnInit {
  items: Book[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.refreshCart();
  }

  removeItem(index: number): void {
    this.cartService.removeFromCart(index);
    this.refreshCart();
  }

  refreshCart(): void {
    this.items = this.cartService.getCartItems();
    this.total = this.cartService.getTotalPrice();
  }
}