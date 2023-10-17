import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private formbuilder:FormBuilder){}

  adminloginform!:FormGroup
  submitted=false;

  ngOnInit(): void {
    this.adminloginform=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required,Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,99}'))]]
    })
  }


  onSubmit(){
     this.submitted=true

     if(this.adminloginform.invalid){
      return
     }

     alert("Success")
  }
}
