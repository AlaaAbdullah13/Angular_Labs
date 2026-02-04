import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}



onLogin(): void {
  const storedUser = localStorage.getItem('registeredUser');
  
  if (storedUser) {
    const userData = JSON.parse(storedUser);
    
    if (this.loginData.email === userData.email && this.loginData.password === userData.password) {
      localStorage.setItem('loggedUser', JSON.stringify(this.loginData));
      this.router.navigate(['/products']);
    } else {
      alert('Invalid Email or Password. Please try again.');
    }
  } else {
    alert('No account found. Please register first.');
    this.router.navigate(['/register']);
  }
}
}