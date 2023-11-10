import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./pages/pages.module").then(x => x.PagesModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import("./authentication/authentication.module").then(x => x.AuthenticationModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
