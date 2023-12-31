import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpServiceService } from 'src/app/shared/http-service.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css'],
})
export class AdminSignupComponent implements OnInit {
  signForm!: FormGroup;
  submitted = false;

  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  

  constructor(private fb: FormBuilder,
              private http:HttpServiceService,
              private router:Router,
              private toaster:ToastrService) {}

  ngOnInit(): void {
    this.signForm = this.fb.group(
      {
        name: ['', Validators.required],
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
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.MustMatch('password', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.signForm.invalid) {
      return;
    }

    delete this.signForm.value.confirmPassword;

    this.http.post('auth/register/admin',this.signForm.value).subscribe({
      next:(res)=>{
        this.toaster.success('Please login now','Register Successful!')
        this.router.navigate(['../login'])
      },
      error:(err)=>{
        this.toaster.error('Please try again','Invalid admin details')
      }
    })
    
  }

  MustMatch(password: string, confirmPassword: string) {
    return (form: FormGroup) => {
      const passwordControl = form.controls[password];
      const confirmPasswordControl = form.controls[confirmPassword];
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

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
}
