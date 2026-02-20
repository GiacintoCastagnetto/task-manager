import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasksSignal = signal<Task[]>([]);
  tasks = this.tasksSignal.asReadonly();

  addTask(task: Task) {
    this.tasksSignal.update(tasks => [...tasks, task]);
  }
}
