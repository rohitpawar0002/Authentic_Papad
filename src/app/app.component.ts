import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})


export class AppComponent implements OnInit{
  title1= "Form Validaion" ;
 

  ngOnInit(): void {
    
  }
 
    

images=[
  {
    imageSrc:"../../assets/image/banerimage1.jpg",
    imageAlt:'nature1',
  },
  {
    imageSrc:"../../assets/image/",
    imageAlt:'nature2',
  },
  {
    imageSrc:"../../assets/image/mig3.jpeg",
    imageAlt:'nature3',
  },
]




}