import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="input-group">
      <input type="text" [(ngModel)]="task" placeholder="What needs to be done?" />
      <button (click)="sendTodo()">Add</button>
    </div>
  `,
  styles: [`
    .input-group { display: flex; gap: 10px; margin-bottom: 20px; }
    input { flex: 1; padding: 12px; border: 2px solid #eee; border-radius: 8px; outline: none; transition: 0.3s; }
    input:focus { border-color: #6c5ce7; }
    button { padding: 12px 20px; background: #6c5ce7; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }
    button:hover { background: #a29bfe; }
  `]
})
export class TodoFormComponent {
  task: string = '';
  @Output() addTodoEvent = new EventEmitter<string>();

  sendTodo() {
    if (this.task.trim()) {
      this.addTodoEvent.emit(this.task);
      this.task = '';
    }
  }
}