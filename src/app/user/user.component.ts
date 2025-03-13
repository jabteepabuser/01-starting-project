import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'; // ./ would be relative ../ would be one folder up.

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); //finds random index from DUMMY USER

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex]; //this is now accessible to the template of user.component
  
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar // using this. is necessary since this is how we access the SelectedUser property since SelectedUser is within the same class.
  } // this is a method within this UserComponent class that could be used later on.

//getter is just a function that returns something, so when we use imagePath again we dont have to write  'assets/users/' + selectedUser.avatar in all of our markups.
}
