import { Component, computed, inject, signal } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form';
import { TaskControlsComponent } from '../task-controls/task-controls';
import { TaskCardComponent } from '../task-card/task-card';
import { TaskService } from '../../services/task';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-content',
  imports: [TaskFormComponent, TaskControlsComponent, TaskCardComponent],
  templateUrl: './content.html',
  styleUrl: './content.css'
})

export class ContentComponent {
  taskService = inject(TaskService);
  
  currentFilter = signal<'all' | 'completed' | 'pending'>('all');

  filteredTasks = computed(() => {
    const tasks = this.taskService.tasks();
    const filter = this.currentFilter();

    if (filter === 'completed') return tasks.filter(t => t.completed);
    if (filter === 'pending') return tasks.filter(t => !t.completed);
    return tasks; 
  });

  handleNewTask(task: Task) {
    this.taskService.addTask(task);
  }

  handleFilterChange(filter: 'all' | 'completed' | 'pending') {
    this.currentFilter.set(filter);
  }
}