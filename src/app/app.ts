import { Component } from '@angular/core';
import { ContentComponent } from './components/content/content';

@Component({
  selector: 'app-root',
  imports: [ContentComponent],
  template: `<app-content></app-content>`
})
export class App {}