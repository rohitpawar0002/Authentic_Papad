import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/customer/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:OrderDetailsService) {}
  foodData:any;
  ngOnInit():void{
    this.foodData=this.service.foodDetails;
  }

  images =[
    "../../assets/bannerimage/kurdai6.jpg",
     "../../assets/bannerimage/batata2.JPG",
    "../../assets/bannerimage/udad2.jpg"
  ]
 
}
