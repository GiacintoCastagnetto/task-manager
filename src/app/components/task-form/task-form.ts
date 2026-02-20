import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})

export class TaskFormComponent {
  onAddTask = output<Task>();

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    priority: new FormControl<'Low' | 'Medium' | 'High'>('Medium', [Validators.required]),
    completed: new FormControl(false)
  });

  submit() {
    if (this.form.valid) {
      this.onAddTask.emit(this.form.value as Task);
      this.form.reset({ title: '', priority: 'Medium', completed: false });
    } else {
      this.form.markAllAsTouched();
    }
  }
}