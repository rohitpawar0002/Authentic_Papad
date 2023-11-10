import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomerLayoutModule } from '../customer-layout/customer-layout.module';


@NgModule({
  declarations: [
    AboutComponent,
    CartComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
    BuyNowComponent,
    PlaceOrderComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    FontAwesomeModule,
    CustomerLayoutModule,
  ]
})
export class PagesModule { }
