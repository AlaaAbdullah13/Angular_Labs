import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
})
export class SkillsComponent {
  // Array of data for Structural Binding
  skillsList = signal([
    { name: 'Angular', level: '90%', color: 'bg-danger' },
    { name: 'ASP.NET Core', level: '85%', color: 'bg-primary' },
    { name: 'SQL Server', level: '95%', color: 'bg-info' },
    { name: 'MongoDB', level: '80%', color: 'bg-success' }
  ]);
}