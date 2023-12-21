import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { ApiEcommerceService } from '../../services/api-ecommerce.service';
declare var bootstrap: any;

@Component({
  selector: 'app-aside-filter',
  templateUrl: './aside-filter.component.html',
  styleUrl: './aside-filter.component.css'
})
export class AsideFilterComponent implements OnInit{
  activeCategory=-1;
  name:string ='';
  minPrice!:number|undefined;
  maxPrice!:number|undefined;
  price!:number|undefined;
  msgError:string = '';
  caregories:Category[] = [];

  constructor(public api_service: ApiEcommerceService, private route: Router){}

  ngOnInit(): void {
    this.api_service.getCategories().subscribe(
      (data)=>{
        this.caregories = data;
      }
    )
  }

  filter(){
    let filter = '/filter';

    if(this.name !== ""){
      filter += `/title/${this.name}`;
    }

    if(this.price != undefined){
      if(this.price > 0){
        filter += `/price/${this.price}`;
      }else{
        this.msgError = "El precio debe ser mayor a 0";
        this.mostrarToast();
      }
    }

    if(this.validatePrices()){
      filter += `/price_range/${this.minPrice}/${this.maxPrice}`;
    }

    if(this.activeCategory !== -1){
      filter += `/category/${this.activeCategory}`;
    }

    this.route.navigate([filter]);
  }

  validatePrices(){
    let rta = true;

    if(this.minPrice!==undefined && this.maxPrice!==undefined){
      if(this.minPrice <= 0 || this.maxPrice <= 0 || this.minPrice > this.maxPrice){
        rta = false;
        this.msgError = "Debe escribir valores validos";
        this.mostrarToast();
      }
    }
    else{
      rta = false;
    }

    return rta;
  }

  clear(){
    this.activeCategory = -1;
    this.name = "";
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.price = undefined;
  }

  mostrarToast(){
    const toastEl = document.getElementById('toastMsg');
    const toast = new bootstrap.Toast(toastEl); 
    toast.show();
  }

}
