
import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { UserService } from '../Services/user.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;

  public loggedInUser = ""

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginObj: any ={
    name:'NA',
    email:'',
    password:'',
    createdOn:'NA'
  }

  onLogin()
  {
    this.userService.login(this.loginObj).subscribe( (response: any) =>
      {
        localStorage.setItem('token', response.response)
        localStorage.setItem('userEmail', response.userVM.email)
        this.loggedInUser = response.userVM.name
        this.userService.loginBehavior.next(response.userVM.email)
        this.router.navigate(["User"])  
      } ,
      (errorMsg) => 
        {
          alert(errorMsg.status +", "+ errorMsg.statusText);
        }     
    )
    
  }

  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);
  }


  private checkCredentials(signInForm: NgForm) {
    
  }
}
