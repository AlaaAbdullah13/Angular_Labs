import { Component } from '@angular/core';
import { UsersListComponent } from './components/users-list/users-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersListComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'USECARD';
}