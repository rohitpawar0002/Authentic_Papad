import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faL, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  faLock=faLock;
  sinform = true;
  addform=false;

  loginform!:FormGroup;
  submitted=false;

  type:string="password"
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash"

  type2:string="password"
  isText2:boolean=false;
  eyeIcon2:string="fa-eye-slash"


  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{  
    this.loginform=this.formBuilder.group({
      name:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required,Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,99}'))]],
      confirmPass:['',Validators.required],
      addressline1:['',Validators.required],
      addressline2:['',Validators.required],
      zip:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
    },
    {
      validators:this.MustMatch('pass','confirmPass')
    });
  }

  hideShowPass(){
    this.isText=!this.isText
    this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text" : this.type="password";
  }
  hideShowPass2(){
    this.isText2=!this.isText2
    this.isText2 ? this.eyeIcon2="fa-eye" : this.eyeIcon2="fa-eye-slash";
    this.isText2 ? this.type2="text" : this.type2="password";
  }

  MustMatch(pass:string,confirmPass:string){
    return(formgroup:FormGroup)=>{
      const passwordcontrol=formgroup.controls[pass];
      const confirmpasswordControl=formgroup.controls[confirmPass];
      if(confirmpasswordControl.errors && !confirmpasswordControl.errors['MustMatch']){
        return
      }
      if(passwordcontrol.value!==confirmpasswordControl.value){
        confirmpasswordControl.setErrors({MustMatch:true});
      }
      else{
        confirmpasswordControl.setErrors(null);
      }
    }
  }

  onSubmit(){
  
    this.submitted=true
  
    if(this.loginform.invalid){
        return;
      }
      
  
      alert("Sucess");
    }
    toggleForm() {
      this.submitted=true
      if (this.loginform.invalid){
        return;
      }
      this.sinform=false;
      this.addform=true;
    }
    backfun(){
      this.sinform=true;
      this.addform=false;
    }
}


