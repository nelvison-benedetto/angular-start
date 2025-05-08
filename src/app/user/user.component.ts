import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//change person ath each click on it
// export class UserComponent {

//   selectedUser = DUMMY_USERS[randomIndex];  //now selectedUser is available in template

//   get imagePath(){
//     return 'assets/images/users/' + this.selectedUser.avatar;
//   }

//   //SIGNALS
//   //selectedUser = signal(DUMMY_USERS[randomIndex]);
//   //imagePath = computed(()=> 'assets/images/users/' + this.selectedUser().avatar);  //computed funct, better track that basic get(), segnale reattivo che si aggiorna auto quando la sua dipendenza(MANDATORY 1+ signals all'interno) cambia, usato spesso per catene di signals

//   onSelectUser(){
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser = DUMMY_USERS[randomIndex];

//     //SIGNALS
//     //this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }

//see all persons
export class UserComponent {
  @Input() avatar!: string;  //@Input receives value from the father(here receives from app.component.html), !(means trust required) type string
  @Input() name!: string;
  get imagePath(){
    return 'assets/images/users/' + this.avatar;
  }
  onSelectUser(){}
}
