import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { EditproductComponent } from './editproduct/editproduct.component';


const routes: Routes = [
{path:'adminlogin',component:AdminLoginComponent},
{path:'adminsignup',component:AdminSignupComponent},
{path:'adminmenu',component:AdminMenuComponent},
{path:'edit/product/:productId',component:EditproductComponent},
{path:'new/product',component:EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule {
  constructor(){
    console.log("Admin Module Loaded");
    
  }
 }
