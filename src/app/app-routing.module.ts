import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent, title : "Home"
  },
  {
    path:'User',
    component :UserComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'AddUser',
    component :AdduserComponent
  },
  {
    path:'Login',
    component :LoginComponent
  },
  {
    path:'EditUser',
    component :AdduserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
