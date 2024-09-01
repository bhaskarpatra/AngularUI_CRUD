import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../Models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = 'http://localhost:5136/api/'; 

  loginBehavior = new BehaviorSubject<String> ("")

  constructor(private http: HttpClient) { 
  }
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.url + 'Users/GetUsers')
  }

  addUsers(user:User):Observable<User> {
    return this.http.post<User>(this.url + 'Users/AddUser', user)   
    
  }

  login(obj : any):Observable<any>
  {
    return this.http.post<any>(this.url + 'Users/Login', obj)
  }

  isLoggedIn()
  {
    return localStorage.getItem("userEmail");
  }

  logOut()
  {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("token");
  }

  user:User =
  {
    id: '',
    name: '',
    email: '',
    password: '',
    createdOn: ''
  }

  getUserObj()
  {
    return this.user
  }

  setUserObj(_user:User)
  {
    this.user.name = _user.name,
    this.user.email = _user.email
  }
  //change
}
