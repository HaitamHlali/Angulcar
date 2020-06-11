import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {


  cars = [{ 
    marque:"BMW",
    immatricule:"i20-1241",
    nombredesiege:"6",
    couleur:"White",
    image:"https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2019/m-portaits-6/bmw-m4-coupe-yas-marina-blue-nick.f82m-stage.jpg"
  },
  { 
    marque:"Mercedes",
    immatricule:"A9-1232",
    nombredesiege:"6",
    couleur:"White",
    image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-benz-eqc-4-1547234221.jpg"
  },
  { 
    marque:"Maserati",
    immatricule:"D91-312",
    nombredesiege:"4",
    couleur:"black",
    image:"https://a211ff96e1c73b59673a-25d5b22cf1e1f9077226fc9508c842c2.ssl.cf1.rackcdn.com/ZAM45VMA9K0341530/b50afd58fc1011702cbc84dd42028939.jpg"
  }
]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  godetails(car){  
    
    let ca = 
    {
      marque: "",
      immatricule: "",
      nombredesiege: "",
      couleur: "",
      image: ""
    };

    ca = car; 

    let i:number = 0;
    let check:Boolean = true;
  
    
    do{

      if(this.cars[i].immatricule === car.immatricule){
        ca = this.cars[i];
        check = false;
      }

        
      i++;
    }while(check && i <= this.cars.length)
    
    this.router.navigate(["CarDetails", JSON.stringify(ca)]);

  }

  }

