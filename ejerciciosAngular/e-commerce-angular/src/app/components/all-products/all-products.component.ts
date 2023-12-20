import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ApiEcommerceService } from '../../services/api-ecommerce.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit{

  products:Product[] = [];

  constructor(public api_service: ApiEcommerceService){}

  ngOnInit(): void {
    this.api_service.getAllProducts().subscribe(
      (data)=>{
        this.products = data;
        console.log(this.products);
      }
    )
  }

  changeImage(event: Event): void {
    const imagen = event.target as HTMLImageElement;
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';
  }

}
