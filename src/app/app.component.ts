import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_start';
  users = DUMMY_USERS;  //set all the users, now available on app.component.html

  selectedUserId?: string;  //!!!set selected user it will be used in the task

  onSelectUser(id:string){
    console.log("Selected user with id "+id);
    this.selectedUserId = id;
  }

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

}
