import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css'],
})
export class AdminSignupComponent implements OnInit {
  signForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signForm = this.fb.group(
      {
        first: ['', Validators.required],
        last: ['', Validators.required],
        mobile: [
          '',
          [
            Validators.required,
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        pass: [
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
        validators: this.MustMatch('pass', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.signForm.invalid) {
      return;
    }

    alert('Success');
  }

  MustMatch(pass: string, confirmPassword: string) {
    return (form: FormGroup) => {
      const passwordControl = form.controls[pass];
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
}
