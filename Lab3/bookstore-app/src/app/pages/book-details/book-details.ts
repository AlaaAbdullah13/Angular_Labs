
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router'; 
import { Book } from '../../models/book';
import { GoogleBooksService } from '../../services/book';
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
  isLoading: boolean = true; 

  constructor(
    private route: ActivatedRoute, 
    private bookService: GoogleBooksService, 
    private cartService: CartService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    const idFromUrl = this.route.snapshot.paramMap.get('id');
    
    if (idFromUrl) {
      this.bookService.getBookById(idFromUrl).subscribe({
        next: (book) => {
          this.selectedBook = book;
          this.isLoading = false;
          console.log('Book Details Loaded:', this.selectedBook);
          
          this.cdr.detectChanges(); 
        },
        error: (err) => {
          console.error('Error fetching book details:', err);
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }

  formatImg(url: string | undefined): string {
    if (!url) return 'assets/images/placeholder.jpg';
    return url.replace('http:', 'https:');
  }

  addToCart() {
    if (this.selectedBook) {
      this.cartService.addToCart(this.selectedBook);
    }
  }
}