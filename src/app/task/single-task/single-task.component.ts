import { Component, input, output } from '@angular/core';
import { Task } from './single-task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-task',
  imports: [DatePipe],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {

  task = input.required<Task>();  //using signals
  complete = output<string>();

  onCompleteTask(){
    this.complete.emit(this.task().id);  //pass the value to the father
  }

}
