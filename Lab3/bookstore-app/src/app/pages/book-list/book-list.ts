import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../../components/book-card/book-card';
import { BOOKS } from '../../constants/books-data';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  template: `
    <div class="container mt-5 py-3">
      
      <div class="welcome-banner">
        <div class="banner-content">
          <h1 class="welcome-title">The Sanctuary of Stories</h1>
          <p class="welcome-text">
            "Step into a world where every page holds a piece of history and every book is a portal to another era."
          </p>
          <div class="vintage-line"></div>
        </div>
      </div>

      <h2 class="section-title text-center mb-5">Explore Our Collection</h2>
      
      <div class="row g-4">
        @for (item of books; track item.id) {
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <app-book-card [book]="item"></app-book-card>
          </div>
        }
      </div>
    </div>
  `,
  styleUrl: './book-list.css'
})
export class BookListComponent implements OnInit {
  books: Book[] = BOOKS;

  ngOnInit() {}
}