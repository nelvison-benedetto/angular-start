import { Component, input , signal } from '@angular/core';
import { SingleTaskComponent } from "./single-task/single-task.component";
import { NewTaskComponent } from "./new-task/new-task.component";  //present 'signal' !
import { NewTaskData } from './single-task/single-task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  imports: [SingleTaskComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {

  userName = input.required<string>();
  userId = input.required<string>();  //id for display ONLY the task of the selected user!
  isAddingTask = false;
  //private taskService = new TaskService();

  constructor(private taskService : TaskService ){}  //DEPENDECY INJECTION!!!

  get selectedUserTasks(){
    //return this.tasks.filter(task => task.userId === this.userId());  //always use '()' x signals
    return this.taskService.getUserTasks(this.userId());
  }

  onCompleteTask(id: string){}

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){
    this.isAddingTask = false;
  }

}
