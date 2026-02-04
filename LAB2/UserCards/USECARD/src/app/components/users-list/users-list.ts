import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersListComponent {
  users = [
    { name: 'Alaa Admin', email: 'admin@test.com', phone: '010123', role: 'admin' },
    { name: 'Sara User', email: 'sara@test.com', phone: '011456', role: 'user' },
    { name: 'salma', email: 'salma@test.com', phone: '012789', role: 'moderator' },
    { name: 'Aya User', email: 'aya@test.com', phone: '015321', role: 'user' }
  ];

  searchText: string = '';

  resetSearch() {
    this.searchText = '';
  }
}