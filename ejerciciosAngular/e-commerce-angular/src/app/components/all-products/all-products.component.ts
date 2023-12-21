import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ApiEcommerceService } from '../../services/api-ecommerce.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit{

  products:Product[] = [];
  minPrice!:number;
  maxPrice!:number;
  title!:string;
  filterText:string = '';
  noProducts:boolean = false;

  constructor(public api_service: ApiEcommerceService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) =>{
      this.minPrice = params.get('min')!;
      this.maxPrice = params.get('max')!;
      this.title = params.get('title')!;

      if(this.title !== null){
        this.api_service.filterByTitle(this.title).subscribe(
          (data)=>{
            this.products = data;
            this.filterText = ' > '+this.title;
            this.noProducts = (this.products.length === 0);
          }
        )
      }else if(this.minPrice !== null){
        this.api_service.filterByPrice(this.minPrice, this.maxPrice).subscribe(
          (data)=>{
            this.products = data;
            this.filterText = ' > de $'+this.minPrice+" a $"+this.maxPrice;
            this.noProducts = (this.products.length === 0);
          }
        )
      }else{
        this.api_service.getAllProducts().subscribe(
          (data)=>{
            this.products = data;
            this.noProducts = (this.products.length === 0);
          }
        )
        
      }
    }) 
  }

  changeImage(event: Event): void {
    const imagen = event.target as HTMLImageElement;
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';
  }

}
