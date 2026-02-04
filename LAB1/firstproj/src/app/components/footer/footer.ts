import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
})
export class FooterComponent {
  email = signal('AlaaAbdallah3336@gmail.com');
  phone = signal('01098482120');
  location = signal('Future City, Al Nuzha, Cairo');
  linkedinUrl = signal('https://www.linkedin.com/in/alaa-abdallah-fullstack133');
  
  currentYear = signal(new Date().getFullYear());
}