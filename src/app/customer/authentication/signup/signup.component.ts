import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faL, faLock } from '@fortawesome/free-solid-svg-icons';
import { HttpServiceService } from '../../services/http-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  faLock = faLock;
  sinform = true;
  addform = false;

  loginform!: FormGroup;
  address!: FormGroup;
  submitted = false;
  addresssubmitted = false;

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
    private toster:ToastrService
  ) {}
  ngOnInit(): void {
    this.loginform = this.formBuilder.group(
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
      line2: ['', Validators.required],
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
  hideShowPass2() {
    this.isText2 = !this.isText2;
    this.isText2
      ? (this.eyeIcon2 = 'fa-eye')
      : (this.eyeIcon2 = 'fa-eye-slash');
    this.isText2 ? (this.type2 = 'text') : (this.type2 = 'password');
  }

  MustMatch(password: string, confirmPass: string) {
    return (formgroup: FormGroup) => {
      const passwordcontrol = formgroup.controls[password];
      const confirmpasswordControl = formgroup.controls[confirmPass];
      if (
        confirmpasswordControl.errors &&
        !confirmpasswordControl.errors['MustMatch']
      ) {
        return;
      }
      if (passwordcontrol.value !== confirmpasswordControl.value) {
        confirmpasswordControl.setErrors({ MustMatch: true });
      } else {
        confirmpasswordControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    this.submitted = true;
    this.addresssubmitted = true;
   
    if (this.loginform.invalid) {
      return;
    }
    if (this.address.invalid) {
      return;
    }

    console.log(this.loginform.value);
    console.log(this.address.value);
    delete this.loginform.value.confirmPass
    this.http
      .post('auth/register/user', {
        ...this.loginform.value,
        address: this.address.value,
      })
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['../login']);
          this.toster.success('Plesae login now','Register Suceessful!')

        },
        error: (err) => {
          this.toster.error('Please try again','Invalid signup detiles')
        },
      });
  }
  toggleForm() {
    this.submitted = true;
    if (this.loginform.invalid) {
      return;
    }
    this.sinform = false;
    this.addform = true;
  }
  backfun() {
    this.sinform = true;
    this.addform = false;
  }
}
