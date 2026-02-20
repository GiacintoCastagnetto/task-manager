import { Component, output } from '@angular/core';

@Component({
  selector: 'app-task-controls',
  templateUrl: './task-controls.html',
  styleUrl: './task-controls.css'
})

export class TaskControlsComponent {
  onFilter = output<'all' | 'completed' | 'pending'>();
}