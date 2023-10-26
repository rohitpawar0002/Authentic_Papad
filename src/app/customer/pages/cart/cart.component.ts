import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/customer/services/cart.service';
import { OrderDetailsService } from 'src/app/customer/services/order-details.service';
import { FormGroup, Validators,FormBuilder, FormControl, Form } from '@angular/forms';
import { HttpServiceService } from '../../services/http-service.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit {
  [x: string]: any;

  placeform!:FormGroup;
  
  submitted=false;

  public products :any=[];
  public grandTotal !:number;
  public productList:any;  
  
  addressData = {};
  
  constructor(private cartService:CartService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private httpService:HttpServiceService){}

  ngOnInit():void{  
    this.cartService.getProducts()
  .subscribe(res=>{
    this.products=res;
    this.grandTotal=this.cartService.getTotalPrice();   
  })

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


placeclick(){
 
  console.log(this.placeform.value);
 
}
onSubmit(){
  
  this.submitted=true

  if(this.placeform.invalid){
      return;
    }
    

    alert("Sucess");
  }

openLg(content: any) {
  this.modalService.open(content, { size: 'lg' });
}


removeItem(item:any){
  this.cartService.removeCartItem(item);
  this.httpService.delete(item).subscribe((result)=>{
    console.log(result);
    
  })

}
emptycart()
{
  this.cartService.removeAllCart();
}


// Form Validation 



}
