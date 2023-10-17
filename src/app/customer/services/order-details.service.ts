import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Kurdai",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice: 400,
      foodImg:"../../assets/menuimage/kurdaimenu.jpeg",
      unit:"kg"
    },
    {
      id:2,
      foodName:"Batata Papad",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:125,
      foodImg:"../../assets/menuimage/batatamenu2.jpeg",
      unit:"packate"
    },
    {
      id:3,
      foodName:"Udad Papad",
      foodDetails:"panner",
      foodPrice:450,
      foodImg:"../../assets/menuimage/udadmenu.png",
      unit:"kg"
    },
    {
      id:4,
      foodName:"Nachani Papad",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:125,
      foodImg:"../../assets/menuimage/nachanimenu.jpeg",
      unit:"pacaket"
    },
    {
      id:5,
      foodName:"Tandul Papad",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:110,
      foodImg:"../../assets/menuimage/tandulmenu.jpeg",
      unit:"pacaket"
    },
    {
      id:6,
      foodName:"Khiche Tandul Papad(Vafe varche)",
      foodDetails:"Oreo ice cream",
      foodPrice:125,
      foodImg:"../../assets/menuimage/khichemenu.jpeg",
      unit:"pacaket"
    },
    {
      id:7,
      foodName:"Tandul Chakali",
      foodDetails:"Oreo ice cream",
      foodPrice:300,
      foodImg:"../../assets/menuimage/tchakalimenu.jpeg",
      unit:"kg"
    },
    {
      id:8,
      foodName:"Sabudana Batata Chakali",
      foodDetails:"Oreo ice cream",
      foodPrice:340,
      foodImg:"../../assets/menuimage/sbchakalimenu2.jpeg",
      unit:"kg"
    },
    {
      id:9,
      foodName:"Batata Wafers",
      foodDetails:"Oreo ice cream",
      foodPrice:600,
      foodImg:"../../assets/menuimage/wafersmenu.jpeg",
      unit:"kg"
    },
    {
      id:10,
      foodName:"Sandage",
      foodDetails:"Oreo ice cream",
      foodPrice:350,
      foodImg:"../../assets/menuimage/sandagemenu.jpeg",
      unit:"kg"
    },
  ]
}

