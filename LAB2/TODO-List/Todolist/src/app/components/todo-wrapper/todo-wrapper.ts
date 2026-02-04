import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from '../todo-input/todo-input'; 
import { TodoListComponent } from '../todo-list/todo-list';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent], 
  template: `
    <div class="container">
      <h2 style="text-align: center; color: #333;">My Tasks</h2>
      
      <app-todo-form (addTodoEvent)="addTodo($event)"></app-todo-form>
      
      <app-todo-list [items]="todos" (deleteEvent)="deleteTodo($event)"></app-todo-list>
    </div>
  `,
  styles: [`
    .container { max-width: 500px; margin: 50px auto; padding: 30px; background: white; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
  `]
})
export class TodoWrapperComponent {
  todos: { text: string; completed: boolean }[] = [];

  addTodo(taskText: string) { 
    this.todos.push({ text: taskText, completed: false });
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}