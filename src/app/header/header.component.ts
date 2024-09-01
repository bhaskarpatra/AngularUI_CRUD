import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = this.service.isLoggedIn()
  constructor(private service : UserService, private router: Router)
  {    
  } 

  ngOnInit(): void {
    this.service.loginBehavior.subscribe(res =>
      this.isLoggedIn = this.service.isLoggedIn()
    )
  }
  logOut()
    {
      this.service.logOut()
      this.isLoggedIn = ""
      this.service.loginBehavior.next("")
      this.router.navigate(["Login"])  
    }
}
