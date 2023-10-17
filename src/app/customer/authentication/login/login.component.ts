import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  faLock=faLock;

  loginform!:FormGroup;
  submitted=false;

  type:string="password"
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash"


  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{  
    this.loginform=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required,Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,16}'))]]
    });
  }

  hideShowPass(){
    this.isText=!this.isText
    this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text" : this.type="password";
  }

  onSubmit(){
  
    this.submitted=true
  
    if(this.loginform.invalid){
        return;
      }
      
  
      alert("Sucess");
    }
}

