import { Component, input , signal } from '@angular/core';  //present 'signal' !

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  userName = input<string>();
}
