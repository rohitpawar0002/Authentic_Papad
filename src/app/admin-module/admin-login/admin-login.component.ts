import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpServiceService } from 'src/app/customer/services/http-service.service';
import { LocalStorageService } from 'src/app/customer/services/local-storage.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpServiceService,
    private toster: ToastrService,
    private localstorageService: LocalStorageService,
    private router: Router
  ) {}

  loginForm!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobile: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,99}'
          ),
        ],
      ],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.http.post('auth/login/admin', this.loginForm.value).subscribe({
      next: (res: any) => {
        this.localstorageService.setItem('access-token', res?.token);
        this.toster.success("You're welcome", 'Login Successfull!');
        this.router.navigate(["admin/menu"]);
      },
      error: (err: any) => {
        this.toster.error('Please Try Again', 'Invalid Admin');
      },
    });
  }
}
