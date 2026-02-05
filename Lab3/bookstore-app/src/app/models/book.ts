export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  stock: number;
  discountPercentage: number;
  thumbnail: string;
  description?: string;
  category: string; 
  rating: number;  
  
  
}