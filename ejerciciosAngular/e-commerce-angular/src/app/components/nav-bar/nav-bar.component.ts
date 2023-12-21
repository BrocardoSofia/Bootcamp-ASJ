import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { ApiEcommerceService } from '../../services/api-ecommerce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{

  caregories:Category[] = [];

  constructor(public api_service: ApiEcommerceService, private route: Router){}

  ngOnInit(): void {
    this.api_service.getCategories().subscribe(
      (data)=>{
        this.caregories = data;
        console.log(this.caregories);
      }
    )
  }

  activeCategory(name: string, id: number){
    return (this.route.url === `/category/${name}/${id}`);
  }

  activeAll(){
    return (this.route.url === `/`);
  }

}
