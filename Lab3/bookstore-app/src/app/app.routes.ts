
import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { BookListComponent } from './pages/book-list/book-list';
import { BookDetailsComponent } from './pages/book-details/book-details';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { CartComponent } from './pages/cart/cart';

const authGuard = () => {
  const router = inject(Router);
  return localStorage.getItem('loggedUser') ? true : router.navigate(['/login']);
};

export const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Bookly - Login' },
  { path: 'register', component: RegisterComponent, title: 'Bookly - Register' },
  { path: 'products', component: BookListComponent, canActivate: [authGuard], title: 'Bookly - Library' },
  { path: 'product/:id', component: BookDetailsComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartComponent, canActivate: [authGuard], title: 'Bookly - My Cart' },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];