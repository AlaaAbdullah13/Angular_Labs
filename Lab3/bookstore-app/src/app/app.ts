
import { RouterOutlet } from '@angular/router'; 
import { NavbarComponent } from './components/navbar/navbar'; 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  title = 'bookstore-app';
}