import { Component, input , signal } from '@angular/core';
import { SingleTaskComponent } from "./single-task/single-task.component";
import { NewTaskComponent } from "./new-task/new-task.component";  //present 'signal' !

@Component({
  selector: 'app-task',
  imports: [SingleTaskComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  userName = input<string>();
  userId = input<string>();  //id for display ONLY the task of the selected user!

  isAddingTask = false;

  tasks = [{
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  }];

  get selectedUserTasks(){
    return this.tasks.filter(task => task.userId === this.userId());  //always use '()' x signals
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

}
