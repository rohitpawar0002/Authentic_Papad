import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/customer/services/cart.service';

import { HttpServiceService } from '../../services/http-service.service';
import { PlaceOrderComponent } from '../place-order/place-order.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit {
  [x: string]: any;

  public products :any=[];
  public grandTotal !:number;
  public productList:any;  
    constructor(private cartService:CartService,
              private modalService: NgbModal,
              private httpService:HttpServiceService){}

  ngOnInit():void{  
    this.cartService.getProducts()
  .subscribe(res=>{
    this.products=res;
    this.grandTotal=this.cartService.getTotalPrice();   
  })

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
}
