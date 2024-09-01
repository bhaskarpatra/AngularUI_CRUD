import { Component } from '@angular/core';
import { User } from '../Models/user.model';
import { UserService } from '../Services/user.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  EditUser(_user: User) {
    this.userService.setUserObj(_user);
  }
  users: User[] = []
  timeleft: number = 60;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //debugger
    this.userService.getUsers().subscribe(
      {        
        next: (response) => {
          this.users = response
          console.log(response)
        },
        error: (err) => console.log(err)
      }
    )
  }
}
