import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './sharePage/navbar/navbar.component';
import { FooterComponent } from './sharePage/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartModalComponent } from './CartModal/cart-modal.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { httpInterceptor } from './shared/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CartModalComponent,
    NavbarComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
    }),
    NgSelectModule,
    FontAwesomeModule,
    HttpClientModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi:true}
  ],
  bootstrap: [AppComponent],
  exports: [CartModalComponent],
})
export class AppModule { }
