import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/customer/services/http-service.service';
import { OrderDetailsService } from 'src/app/customer/services/order-details.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  editForm!:FormGroup 
  productId: any;
  EditData:any;
  EditProduct=null;


constructor(private fb:FormBuilder,
            private param:ActivatedRoute,
            private service:OrderDetailsService,
            private httpService:HttpServiceService,
            private foodData:OrderDetailsService){}


ngOnInit(): void {
  this.editForm=this.fb.group({
    name:['',Validators.required],
    description:['',Validators.required],
    unit:['',Validators.required],
    price:['',Validators.required]
})

this.productId=this.param.snapshot.paramMap.get('productId');
if(this.productId)
{
this.bindValue(this.productId)
}
}
bindValue(id:any){
 // TODO: get product from backend and bind values to form
this.editForm.patchValue(
  { 
    name:"dd",
    description:"product description",
    unit:'kg',
    price:100
  }
 )   
}

submit(){
  // TODO: check if productId available then hit update product api 
  //        otherwise hit create product api
}
}