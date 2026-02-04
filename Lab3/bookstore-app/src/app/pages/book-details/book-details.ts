

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Import ActivatedRoute
import { Book } from '../../models/book';
import { BOOKS } from '../../constants/books-data';
import { DiscountPipe } from '../../pipes/discount.pipe'; 
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, RouterLink, DiscountPipe], 
  templateUrl: './book-details.html',
  styleUrl: './book-details.css'
})
export class BookDetailsComponent implements OnInit {
  selectedBook: Book | undefined;

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService
  ) {}

  ngOnInit() {
    const idFromUrl = this.route.snapshot.paramMap.get('id');
    console.log('ID from URL:', idFromUrl); 

    if (idFromUrl) {
      this.selectedBook = BOOKS.find(b => b.id === Number(idFromUrl));
      console.log('Book Found:', this.selectedBook);
    }
  }

addToCart() {
  if (this.selectedBook) {
    this.cartService.addToCart(this.selectedBook);
  }
}
}