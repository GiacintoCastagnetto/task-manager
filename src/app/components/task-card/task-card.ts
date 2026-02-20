import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  imports: [NgClass],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})

export class TaskCardComponent {
  task = input.required<Task>();
}