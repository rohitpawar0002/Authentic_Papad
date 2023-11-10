import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/Guard/customerGuard/auth.guard';
import { AboutComponent } from './about/about.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

const routes: Routes = [
  {path:'',pathMatch:'full', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'cart',component:CartComponent},
  {path:'place/order',canActivate:[authGuard],component:PlaceOrderComponent},
  {path:'contact',component:ContactComponent},
  {path:'menu',component:MenuComponent},
  {path:'buy/now/:id',component:BuyNowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
