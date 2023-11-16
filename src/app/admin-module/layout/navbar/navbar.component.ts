import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any = {};
  constructor(
    private toaster: ToastrService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser();
    this.userService.getUser().subscribe({
      next: (res) => {
        this.user = res;
      },
    });
  }

  isLoggedIN() {
    return localStorage.getItem('access-token');
  }

  logout() {
    localStorage.removeItem('access-token');
    this.toaster.success('Logout SuccessFully!');
    this.userService.setUser({});
    this.router.navigate(['/'])
  }
}
