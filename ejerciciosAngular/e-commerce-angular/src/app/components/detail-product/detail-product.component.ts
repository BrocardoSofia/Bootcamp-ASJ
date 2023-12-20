import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiEcommerceService } from '../../services/api-ecommerce.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit{
  product!: Product;
  idProduct!: number;

  constructor(public api_service: ApiEcommerceService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) =>{
      this.idProduct = params.get('idProduct')!;

      this.api_service.getProduct(this.idProduct).subscribe(
        (data)=>{
          console.log(data);
          this.product = data;
        }
      )
    })
  }

  changeImage(event: Event): void {
    const imagen = event.target as HTMLImageElement;
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';
  }

  addToCart(){
    //enviar producto al carrito (localStorage)
    this.api_service.addProductToCart(this.idProduct);

    //mensaje de que se agrego el producto
    alert(this.product.title+" se agrego al carrito!");

    //redirigir a la pagina principal
    this.router.navigate(['']);
  }

}
