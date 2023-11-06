import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/customer/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public totalItem: number = 0;
  constructor(private cartService: CartService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      });
  }

  isLoggedIN() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.toaster.success('Logout');
  }
}
