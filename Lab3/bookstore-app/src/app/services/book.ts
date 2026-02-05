import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  stock: number;
  discountPercentage: number;
  description: string;
  thumbnail: string;
  category: string;
  rating: number;
}

interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    categories?: string[];
    averageRating?: number;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private apiKey = 'AIzaSyBGb9Vji4yWed0auzbaVMw_TwpN0xEx1Z4'; 

  constructor(private http: HttpClient) {}


  searchBooks(query: string = 'self-development'): Observable<Book[]> {
    const url = `${this.apiUrl}?q=${query}&maxResults=25&key=${this.apiKey}`;
    
    return this.http.get<any>(url).pipe(
      map(response => {
        if (!response.items) return [];
        
        return response.items.map((item: GoogleBook) => this.convertToBook(item));
      })
    );
  }


  private convertToBook(googleBook: GoogleBook): Book {
  const volumeInfo = googleBook.volumeInfo;
  
  let thumb = volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/300x450?text=No+Cover';
  if (thumb.startsWith('http:')) {
    thumb = thumb.replace('http:', 'https:');
  }

  return {
    id: googleBook.id,
    title: volumeInfo.title || 'Unknown Title',
    author: volumeInfo.authors?.[0] || 'Unknown Author',
    description: volumeInfo.description || 'No description available',
    thumbnail: thumb,
    category: volumeInfo.categories?.[0] || 'General',
    rating: volumeInfo.averageRating || 4.0,
    price: this.generateRandomPrice(),
    stock: this.generateRandomStock(),
    discountPercentage: this.generateRandomDiscount()
  };
}

 
  private generateRandomPrice(): number {
    return Math.floor(Math.random() * (500 - 300) + 300); 
  }

  
  private generateRandomStock(): number {
    return Math.floor(Math.random() * (50 - 10) + 10); 
  }


  private generateRandomDiscount(): number {
    const discounts = [0, 5, 10, 15, 20];
    return discounts[Math.floor(Math.random() * discounts.length)];
  }

  
  getBookById(id: string): Observable<Book> {
    const url = `${this.apiUrl}/${id}?key=${this.apiKey}`;
    
    return this.http.get<GoogleBook>(url).pipe(
      map(item => this.convertToBook(item))
    );
  }
}