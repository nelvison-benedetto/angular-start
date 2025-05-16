import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],  //IMPORT 'FORM MODULE' to use ngModel x two-ways-binding
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  cancel = output<void>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  onCancel(){
    this.cancel.emit();  //send to the father!
  }

  onSubmit(){

  }
}
