
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // أضيفي هذا الاستيراد
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../../components/book-card/book-card';
import { GoogleBooksService, Book } from '../../services/book'; 

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookListComponent implements OnInit {
  books: Book[] = []; 

  constructor(
    private googleBooksService: GoogleBooksService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.googleBooksService.searchBooks('self-development').subscribe({
      next: (data) => {
        this.books = [...data]; 
        console.log('Books ready for UI:', this.books.length);
        
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Error fetching books:', err)
    });
  }

  scrollToBooks() {
    const element = document.getElementById('bookSection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}