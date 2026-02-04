// import { Routes, Router } from '@angular/router';
// import { inject } from '@angular/core';
// import { BookListComponent } from './pages/book-list/book-list';
// import { BookDetailsComponent } from './pages/book-details/book-details';
// import { LoginComponent } from './pages/login/login';
// import { RegisterComponent } from './pages/register/register';

// // Guard Function
// const authGuard = () => {
//   const router = inject(Router);
//   const user = localStorage.getItem('loggedUser');
  
//   if (user) {
//     return true;
//   } else {
//     // If no user is found, redirect to login and block access
//     router.navigate(['/login']);
//     return false;
//   }
// };

// export const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
  
//   // Protect these routes
//   { path: 'products', component: BookListComponent, canActivate: [authGuard] },
//   { path: 'product/:id', component: BookDetailsComponent, canActivate: [authGuard] },
  
//   // Default path
//   { path: '', redirectTo: 'products', pathMatch: 'full' },
//   { path: '**', redirectTo: 'login' } 
//   { path: 'cart', component: CartComponent, canActivate: [authGuard] }
// ];
import { Routes, Router } from '@angular/router';
import { inject } from '@angular/core';

// Import Components
import { BookListComponent } from './pages/book-list/book-list';
import { BookDetailsComponent } from './pages/book-details/book-details';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { CartComponent } from './pages/cart/cart';
import { NotFoundComponent } from './pages/not-found/not-found';

/**
 * Authentication Guard
 * Blocks unauthorized access to products and cart
 */
const authGuard = () => {
  const router = inject(Router);
  const user = localStorage.getItem('loggedUser');
  
  if (user) {
    return true;
  } else {
    // Redirect to login if user session is not found
    router.navigate(['/login']);
    return false;
  }
};

export const routes: Routes = [
  // Authentication Routes (Public)
  { path: 'login', component: LoginComponent, title: 'Bookly - Login' },
  { path: 'register', component: RegisterComponent, title: 'Bookly - Register' },

  // Application Routes (Protected by authGuard)
  { 
    path: 'products', 
    component: BookListComponent, 
    canActivate: [authGuard], 
    title: 'Bookly - Browse Books' 
  },
  { 
    path: 'product/:id', 
    component: BookDetailsComponent, 
    canActivate: [authGuard], 
    title: 'Bookly - Book Details' 
  },
  { 
    path: 'cart', 
    component: CartComponent, 
    canActivate: [authGuard], 
    title: 'Bookly - My Cart' 
  },

  // Redirection Logic
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, title: '404 - Not Found' }
];