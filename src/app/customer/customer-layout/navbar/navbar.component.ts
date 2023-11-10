import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/customer/services/cart.service';
import { UserService } from 'src/app/customer/services/user.service';

@Component({
  selector: 'customer-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any = {};
  totalItem: number = 0;
  constructor(
    private cartService: CartService,
    private toaster: ToastrService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser();
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });

    this.userService.getUser().subscribe({
      next: (res) => {
        this.user = res;
      },
    });
  }

  isLoggedIN() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.toaster.success('Logout');
    this.userService.setUser({});
  }
}
