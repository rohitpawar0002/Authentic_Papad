import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderDetailsService } from 'src/app/customer/services/order-details.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

public cartItemList:any=[]
public productList=new BehaviorSubject<any>([]);

  constructor(private service:OrderDetailsService) { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product:any){
    console.log(product);
    
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  } 
   getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.price;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList); 
  }
  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList)
  }

  
}
