import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ToastrModule } from 'ngx-toastr';
import { LayoutModule } from './layout/layout.module';




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
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
    }),
    LayoutModule
  ]
})
export class AdminModuleModule { }
