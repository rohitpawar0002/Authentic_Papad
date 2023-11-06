import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { HttpServiceService } from '../../../shared/http-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  faLock = faLock;
  userForm = true;

  loginForm!: FormGroup;
  address!: FormGroup;
  submitted = false;
  addressSubmitted = false;

  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  type2: string = 'password';
  isText2: boolean = false;
  eyeIcon2: string = 'fa-eye-slash';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpServiceService,
    private router: Router,
    private toaster: ToastrService
  ) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        name: [
          '',
          [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')],
        ],
        mobile: [
          '',
          [
            Validators.required,
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,99}'
            ),
          ],
        ],
        confirmPass: ['', Validators.required],
      },
      {
        validators: this.MustMatch('password', 'confirmPass'),
      }
    );

    this.address = this.formBuilder.group({
      line1: ['', Validators.required],
      line2: [''],
      pinCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  MustMatch(password: string, confirmPass: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPass];
      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['MustMatch']
      ) {
        return;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ MustMatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    this.submitted = true;
    this.addressSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    if (this.address.invalid) {
      return;
    }

    console.log(this.loginForm.value);
    console.log(this.address.value);
    delete this.loginForm.value.confirmPass;
    this.http
      .post('auth/register/user', {
        ...this.loginForm.value,
        address: this.address.value,
      })
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['../login']);
          this.toaster.success('Please login now', 'Register Successfully!');

        },
        error: (err) => {
          this.toaster.error('Please try again', 'Invalid signup details');
        },
      });
  }
  toggleForm() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.userForm = false;
  }
  backFn() {
    this.userForm = true;
  }
}
