import { Component, SimpleChanges } from '@angular/core';
import { User } from '../Models/user.model';
import { UserService } from '../Services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent {
  constructor(private userService: UserService){}

  isEditcalled = false

  ngOnChanges() 
  {
    console.log("ngOnChanges called")
  }

  ngOnInit()
  {
    this.user = this.userService.getUserObj();
    if(this.user.email.length != 0)
      this.isEditcalled = true
    console.log("ngInit called")
  }

  ngDoCheck(){
    console.log("ngDoCheck called")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called")
    this.user.createdOn = ''
    this.user.name = ''
    this.user.email = ''
    this.user.password = ''
  }

  //------------------------
  password = 'password'
  showPassword() {
    if(this.password === 'password')
    {
      this.password = 'text'
    }
    else
    {
      this.password = 'password'
    }    
  }
  //------------------------
  user : User = {
    id : 'qwerty',
    name: '',
    email : '',
    password : '',
    createdOn : ''
  };
  response : any;
  
  addUser(){
    this.userService.addUsers(this.user).subscribe({
      next:(u) => {this.response = u}      
    });  
    
  }
}
