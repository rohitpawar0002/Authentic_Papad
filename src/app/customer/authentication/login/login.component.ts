import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { HttpServiceService } from '../../services/http-service.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder,
              private http:HttpServiceService,
              private localstorageService:LocalStorageService,
              private toster:ToastrService,
              private router:Router){}
  ngOnInit():void{  
    this.loginform=this.formBuilder.group({
      mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password:['',[Validators.required,Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,16}'))]]
    });    
  }

  hideShowPass(){
    this.isText=!this.isText
    this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text" : this.type="password";
  }

  onSubmit(){
  
    this.submitted=true
  
    if(this.loginform.invalid)  {
        return;
      }  
      console.log(this.loginform.value);     
      this.http.post('auth/login',this.loginform.value).subscribe({
        next:(res:any)=>{ 
          this.toster.success('Login Successful')
          this.router.navigate(['/'])
        this.localstorageService.setItem('access-token', res?.token)
        console.log(res);
        },
         error:(err:any)=>{
          this.toster.error('Invalid User')

        }
      })   
    }
  }
   
    


