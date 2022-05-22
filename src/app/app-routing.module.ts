import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [

  {
    path: '', pathMatch:"full", component: HomePageComponent, 
  
  },
  

  { path: 'register', component: RegistrationPageComponent },


  { path: 'getUsers', component: UsersPageComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
