import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart'; 

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {} 

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items: any[]) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  increase(id: string) {
    this.cartService.updateQuantity(id, 1);
  }

  decrease(id: string) {
    this.cartService.updateQuantity(id, -1);
  }

  remove(id: string) {
    this.cartService.removeFromCart(id);
  }
}