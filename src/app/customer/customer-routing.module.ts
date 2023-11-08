import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BuyNowComponent } from './pages/buy-now/buy-now.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { authGuard } from '../Guard/customerGuard/auth.guard';

const routes: Routes = [

  {path:'',pathMatch: 'full',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'cart',component:CartComponent},
  {path:'place/order',canActivate:[authGuard],component:PlaceOrderComponent},
  {path:'contact',component:ContactComponent},
  {path:'auth', loadChildren:()=>import("./authentication/authentication.module").then(x=> x.AuthenticationModule)},
  {path:'menu',component:MenuComponent},
  {path:'buy/now/:id',component:BuyNowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
