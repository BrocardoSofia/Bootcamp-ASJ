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
  categoryId:number = -1;
  title!:string;
  price!:number;
  filterText:string = "Mostrando todos los productos";
  noProducts:boolean = false;
  urlFilter: string = 'products';

  constructor(public api_service: ApiEcommerceService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) =>{
      this.title = params.get('title')!;
      this.price = params.get('price')!;
      this.minPrice = params.get('min')!;
      this.maxPrice = params.get('max')!;
      this.categoryId = params.get('idCategory')!;
      this.filterText = "Mostrando todos los productos"

      if(this.title !== null || this.price !== null || this.minPrice !== null || this.categoryId !== null){
        this.urlFilter += '/?';

        if(this.title !== null){
          this.urlFilter += ('title='+this.title);
          this.filterText += ' > '+this.title;
        }

        if(this.price !== null){
          this.urlFilter += ('&price='+this.price);
          this.filterText += ' > $'+this.price;
        }

        if(this.minPrice !== null){
          this.urlFilter += ('&price_min='+this.minPrice+'&price_max='+this.maxPrice);
          this.filterText += ' > $'+this.minPrice+' - $'+this.maxPrice;
        }

        if(this.categoryId !== null){
          this.urlFilter += ('&categoryId='+this.categoryId);
        }

        //aca hago el subscribe
        this.api_service.getProducts(this.urlFilter).subscribe(
          (data)=>{
            this.products = data;
            this.noProducts = (this.products.length === 0);
          }
        )
      }else{
        
        this.api_service.getAllProducts().subscribe(
          (data)=>{
            this.products = data;
            this.noProducts = (this.products.length === 0);
            this.filterText = "Mostrando todos los productos";
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
