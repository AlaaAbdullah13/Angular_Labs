import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
})
export class AboutComponent {
  // Binding professional summary
  summary = signal('Fresh graduate in Business Information Systems with a GPA of 3.99, specializing in full stack development and database administration.');

  // Binding Education Array
  education = signal([
    { 
      degree: 'Bachelor of Business Information Systems', 
      institution: 'Helwan University', 
      grade: 'GPA: 3.99 (Excellent)',
      date: 'Graduated 2025'
    },
    { 
      degree: 'Diploma in Open-Source Application Development', 
      institution: 'Information Technology Institute (ITI)', 
      grade: 'Ongoing',
      date: 'Expected June 2025'
    }
  ]);
}