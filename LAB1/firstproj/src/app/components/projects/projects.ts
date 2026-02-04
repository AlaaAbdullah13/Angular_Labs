import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  projects = signal([
    { title: 'Bakery Website', desc: 'Responsive site with mock database integration.', tag: 'Frontend' },
    { title: 'Travel App', desc: 'Interactive web app using external APIs.', tag: 'API' },
    { title: 'Ramadan Web', desc: 'Dynamic site with CRUD functionality.', tag: 'FullStack' }
  ]);
}