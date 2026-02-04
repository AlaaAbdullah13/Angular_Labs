import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list">
      @for (item of items; track $index) {
        <div class="todo-item">
          <span [style.textDecoration]="item.completed ? 'line-through' : 'none'"
                (click)="item.completed = !item.completed">
            {{ item.text }}
          </span>
          <button (click)="remove($index)">🗑️</button>
        </div>
      } @empty {
        <p style="text-align: center; color: #999;">No tasks yet. Add one!</p>
      }
    </div>
  `,
  styles: [`
    .todo-item { 
      display: flex; justify-content: space-between; align-items: center;
      padding: 12px; border-bottom: 1px solid #eee; transition: 0.2s;
    }
    .todo-item:hover { background: #f9f9f9; }
    span { cursor: pointer; flex: 1; }
    button { background: none; border: none; cursor: pointer; font-size: 1.2rem; }
  `]
})
export class TodoListComponent {
  @Input() items: any[] = [];
  @Output() deleteEvent = new EventEmitter<number>();

  remove(index: number) {
    this.deleteEvent.emit(index);
  }
}