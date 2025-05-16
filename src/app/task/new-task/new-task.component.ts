import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../single-task/single-task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],  //IMPORT 'FORM MODULE' to use ngModel x two-ways-binding
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  userId = input.required<string>();
  cancel = output<void>();
  add = output<NewTaskData>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  private taskService = inject(TaskService);

  onCancel(){
    this.cancel.emit();  //send to the father!
  }

  onSubmit(){
    // this.add.emit({
    //   title: this.enteredTitle(),
    //   summary: this.enteredSummary(),
    //   dueDate: this.enteredDueDate()
    // });

    this.taskService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate()
    }, this.userId());
    this.cancel.emit();
  }
}
