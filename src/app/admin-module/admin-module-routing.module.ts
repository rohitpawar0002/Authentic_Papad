import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
{path:'admin/login',component:AdminLoginComponent},
{path:'admin/signup',component:AdminSignupComponent},
{path:'admin/menu',component:AdminMenuComponent},
{path:'edit/product/:productId',component:EditProductComponent},
{path:'new/product',component:EditProductComponent}
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
