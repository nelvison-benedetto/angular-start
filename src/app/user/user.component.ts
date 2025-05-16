import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


// type User {
//     id: string;
//     name: string;
//     avatar: string;
// }


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


export class UserComponent {
  //@Input ({required: true}) id!: string;  //se fosse stato '?' significa usa string is 'id' exist, otherwise set type undefined
  //@Input({required: true}) avatar!: string;  //@Input receives value from the father(here receives from app.component.html), !(means trust required) type string
  //@Input({required: true}) name!: string;  //better add always 'required:true' so if value missing in the html it will throw an error

  @Input({required: true}) user!: User;
  isSelected = input.required<boolean>();
  //@Output() select = new EventEmitter<string>(); //evento personalizzato che il componente può "sparare" verso l’esterno al father
  select = output<string>(); // better and new than the row upper, use 'output function'(instead of 'output decoration')

  //SIGNALS
  // avatar = input.required<string>();  //uso di 'input function' (Input is instead 'input decoration'!)
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/images/users/' + this.avatar());


  get imagePath(){
    return 'assets/images/users/' + this.user.avatar;
  }
  onSelectUser(){  //in html user.component.html, when user clicks on the button, the event is emitted (shot to the father)
    this.select.emit(this.user.id);  //'select' viene quindi catturato in row '(select) = "onSelectUser($event)"' in app.component.html
  }

}
