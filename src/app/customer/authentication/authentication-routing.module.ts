import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { loginGuard } from 'src/app/Guard/adminGuard/login.guard';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login',canActivate:[loginGuard], component:LoginComponent},
  {path:'signup',canActivate:[loginGuard], component:SignupComponent}
];

   
    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
