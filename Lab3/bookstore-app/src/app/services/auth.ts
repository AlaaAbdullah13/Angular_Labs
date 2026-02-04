import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedUser');
  }

  getRegisteredUser() {
    const user = localStorage.getItem('registeredUser');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.router.navigate(['/login']);
  }
}