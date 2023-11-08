import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/customer/services/cart.service';
import { UserService } from 'src/app/customer/services/user.service';
import { HttpServiceService } from 'src/app/shared/http-service.service';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

@Component({
  selector: 'app-navbar',
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
    private userService: UserService,
    private localStorage: LocalStorageService,
    private http: HttpServiceService
  ) {}

  ngOnInit(): void {
    this.getUser();
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
    this.router.navigate(['customer/auth/login']);
  }

  getUser() {
    this.http.get('user').subscribe({
      next: (res: any) => {
        this.userService.setUser(res?.user);
      },
      error: (err) => {
        this.toaster.error('error while fetching user', err.message);
      },
    });
  }
}
