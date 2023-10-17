import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

 adminsignupform!:FormGroup
 submitted=false;           


constructor(private formbuilder:FormBuilder){}

ngOnInit(): void {
 this.adminsignupform=this.formbuilder.group({
  first:['',Validators.required],
  last:['',Validators.required],
  mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  email:['',[Validators.required,Validators.email]],
  pass:['',[Validators.required,Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,99}'))]],
  confirmpass:['',Validators.required]
 },
 {
    validators:this.MustMatch('pass','confirmpass')
 });

}

onSubmit(){
  this.submitted=true;

  if(this.adminsignupform.invalid){
    return
  }

  alert('Success')
}

MustMatch(pass:string,confirmpass:string){
  return(formgroup:FormGroup)=>{
    const passwordcontrol=formgroup.controls[pass];
    const confirmpasswordControl=formgroup.controls[confirmpass];
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

}
