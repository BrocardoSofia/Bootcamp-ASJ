import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ApiEcommerceService } from '../../services/api-ecommerce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  products:Product[] = [];
  total:number=0;

  constructor(public api_service: ApiEcommerceService, private router:Router){}

  ngOnInit(): void {
    let cart = this.api_service.getProductsOfCart();

    this.initCart(cart);
  }

  initCart(cart: number[]){
    for(let id of cart){
      this.api_service.getProduct(id).subscribe(
        (data)=>{
          console.log("data");
          console.log(data);
          this.products.push(data);
          this.total+=data.price;
        }
      )
    }
    
  }

  buyCart(){
    //llamar al servicio para comprar carrito
    this.api_service.buyCart();

    //alert que se compro el carrito
    alert("¡Gracias por su compra!");

    //redirigir a pagina principal
    this.router.navigate(['']);
  }

  cartIsEmpty(){
    return this.products.length === 0;
  }

}
