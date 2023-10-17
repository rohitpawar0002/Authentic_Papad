import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/customer/services/order-details.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit{

  editform!:FormGroup 
  getEditId: any;
  EditData:any;

constructor(private formbuilder:FormBuilder,private param:ActivatedRoute,private service:OrderDetailsService){}


ngOnInit(): void {
  this.editform=this.formbuilder.group({
    name:['',Validators.required],
    description:['',Validators.required],
    unit:['',Validators.required],
    price:['',Validators.required]
})

this.editform.patchValue(
  { 
    name:"dd",
    description:"product description",
    unit:'kg',
    price:100
  }
 )




this.getEditId=this.param.snapshot.paramMap.get('productId');
console.log(this.getEditId,'getedit');
if(this.getEditId)
{
  this.EditData=this.service.foodDetails.filter((value)=>{
    return value.id==this.getEditId;
  });
  console.log(this.EditData,'editdata>>');
}
}
}