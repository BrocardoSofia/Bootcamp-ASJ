import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ApiEcommerceService } from '../../services/api-ecommerce.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent implements OnInit{
  products:Product[] = [];
  idCategory!: number;

  constructor(public api_service: ApiEcommerceService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) =>{
      this.idCategory = params.get('idCategory')!;

      this.api_service.getProductsByCategory(this.idCategory).subscribe(
        (data)=>{
          console.log("esta es la data");
          console.log(data);
          this.products = data;
          
        }
      )
    })
    
  }

  changeImage(event: Event): void {
    const imagen = event.target as HTMLImageElement;
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';
  }
}
