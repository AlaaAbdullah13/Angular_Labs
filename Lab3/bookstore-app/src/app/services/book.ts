import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    const localBooks: Book[] = [
      {
        id: 1,
        title: "The Sealed Nectar",
        author: "S. Mubarakpuri",
        price: 15.99,
        thumbnail: "https://m.media-amazon.com/images/I/61XpS6f5TfL.jpg",
        stock: 20,
        category: "Islamic",
        discountPercentage: 5,
        rating: 4.9,
        description: "Biography of the Prophet (PBUH)."
      },
      {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        price: 18.00,
        thumbnail: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
        stock: 15,
        category: "Self-Help",
        discountPercentage: 10,
        rating: 4.8,
        description: "Building good habits."
      },
      {
        id: 3,
        title: "Reclaim Your Heart",
        author: "Yasmin Mogahed",
        price: 14.00,
        thumbnail: "https://m.media-amazon.com/images/I/71+vS-9ofxL.jpg",
        stock: 25,
        category: "Islamic",
        discountPercentage: 0,
        rating: 4.9,
        description: "Spiritual awakening."
      },
      {
        id: 4,
        title: "Don't Be Sad (La Tahzan)",
        author: "Aaidh Al-Qarni",
        price: 19.99,
        thumbnail: "https://m.media-amazon.com/images/I/51hXlA8A-HL.jpg",
        stock: 30,
        category: "Islamic / Spiritual",
        discountPercentage: 5,
        rating: 4.8,
        description: "A roadmap for anyone seeking to live a peaceful life."
      }
    ];

    return of(localBooks);
  }
}