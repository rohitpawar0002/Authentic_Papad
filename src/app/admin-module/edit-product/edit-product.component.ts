import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/customer/services/order-details.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  editForm!:FormGroup 
  getEditId: any;
  EditData:any;

constructor(private fb:FormBuilder,private param:ActivatedRoute,private service:OrderDetailsService){}


ngOnInit(): void {
  this.editForm=this.fb.group({
    name:['',Validators.required],
    description:['',Validators.required],
    unit:['',Validators.required],
    price:['',Validators.required]
})

this.editForm.patchValue(
  { 
    name:"dd",
    description:"product description",
    unit:'kg',
    price:100
  }
 )




this.getEditId=this.param.snapshot.paramMap.get('productId');
console.log(this.getEditId,'getEdit');
if(this.getEditId)
{
  this.EditData=this.service.foodDetails.filter((value)=>{
    return value.id==this.getEditId;
  });
  console.log(this.EditData,'editData>>');
}
}
}