import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'customer', pathMatch: 'full'},
  {path:'Admin',loadChildren:()=>import('./admin-module/admin-module.module').then(x=>x.AdminModuleModule)},
  {path:'customer',loadChildren:()=>import('./customer/customer.module').then(x=>x.CustomerModule)},
  
];

   
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
