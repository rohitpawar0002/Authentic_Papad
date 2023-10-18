import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/customer/services/order-details.service';
import { FormGroup, Validators,FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {
  
  myForm!:FormGroup;
  submitted:any;
  

  constructor(private param:ActivatedRoute,private service:OrderDetailsService,private formBuilder: FormBuilder){}
  getMenuId:any;
  menuData:any;


  ngOnInit(): void{
    this.getMenuId=this.param.snapshot.paramMap.get('id');
    if(this.getMenuId)
    {
      this.menuData=this.service.foodDetails.filter((value)=>{
        return value.id==this.getMenuId;
      });
    }
  

    this.myForm=this.formBuilder.group({
     
      email:['',[Validators.required, Validators.email]],
      pass:['',[Validators.required,Validators.minLength(5)]],
      address:['',Validators.required]
        });
  
  }

   onSubmit() {

    this.submitted=true
     
      if(this.myForm.invalid){
        // send the object to database
        return;
     }
     alert('Success!')
     
 }

  
  
}

   




//this.submitted=true

//if(this.myForm.invalid){
  //  return;
  //}

  //alert("Success");
//}