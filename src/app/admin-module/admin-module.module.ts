import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { EditProductComponent } from './edit-product/edit-product.component';




@NgModule({
  declarations: [
  AdminLoginComponent,
  AdminSignupComponent,
  AdminMenuComponent,
  EditProductComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModuleModule { }
