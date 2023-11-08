import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { HttpServiceService } from '../../../shared/http-service.service';
import { LocalStorageService } from '../../../shared/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  faLock = faLock;

  loginForm!: FormGroup;
  submitted = false;

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  constructor(private formBuilder: FormBuilder,
    private http: HttpServiceService,
    private storageService: LocalStorageService,
    private toaster: ToastrService,
    private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mobile: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,16}'))]]
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.http.post('auth/login', this.loginForm.value).subscribe({
      next: (res: any) => {
        this.toaster.success('Login Successful');
        history.back();
        this.storageService.setItem('token', res?.token);
      },
      error: (err: any) => {
        this.toaster.error('Invalid User', err.message);
      }
    });
  };
  logoutUser(userId: any) {
    this.storageService.removeItem('token');
    this.router.navigate(['login']);
  }

}




