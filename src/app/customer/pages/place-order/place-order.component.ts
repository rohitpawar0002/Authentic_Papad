import { Component, Input } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastRef, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {


  placeform!:FormGroup;
  
  submitted=false;

  addressData = {};
   modal: any;
  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private toster:ToastrService){}

  
  ngOnInit():void{

  this.placeform=this.formBuilder.group({
    name:['',Validators.required],
    mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email:['',[Validators.required, Validators.email]],
    
    address: this.formBuilder.group({
    
    line1:['',Validators.required],
    line2:[''],
    zip:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required] 

  })
 
  });
}

get address() {
  return this.placeform.get('address')
}

onSubmit(){
  
  this.submitted=true

  if(this.placeform.invalid){
    this.toster.warning('Something Went Wrong')
      return;
    }

    this.toster.success('Order is place successfully!')
    

  }
}
