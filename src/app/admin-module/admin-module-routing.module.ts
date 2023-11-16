import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { authGuardGuard } from '../Guard/adminGuard/auth-guard.guard';
import { loginGuard } from '../Guard/adminGuard/login.guard';
import { AdminLayoutComponent } from './layout/admin-layout.component';

const routes: Routes = [
  { path: 'login', canActivate: [loginGuard], component: AdminLoginComponent },
  {
    path: 'signup',
    canActivate: [loginGuard],
    component: AdminSignupComponent,
  },
  {
    path: '',
    canActivate: [authGuardGuard],
    component: AdminLayoutComponent,
    children: [
      {
        path: 'menu',
        component: AdminMenuComponent
      },
      {
        path: 'edit/product/:productId',
        canActivate: [authGuardGuard],
        component: EditProductComponent,
      },
      {
        path: 'new/product',
        canActivate: [authGuardGuard],
        component: EditProductComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModuleRoutingModule {
  constructor() { }
}
