import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  firstName = signal('Alaa');
  lastName = signal('Abdallah');
  title = signal('Full Stack Web Developer & Database Admin');
  profileImg = signal('assets/alaa.png'); // Property Binding target

  sayHello() {
    alert(`Hello! I am ${this.firstName()} ${this.lastName()}. Welcome to my lab project!`);
  }
}