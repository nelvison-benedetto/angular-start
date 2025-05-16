import { Component, input } from '@angular/core';
import { Task } from './single-task.model';

@Component({
  selector: 'app-single-task',
  imports: [],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {

  task = input.required<Task>();  //using signals

}
