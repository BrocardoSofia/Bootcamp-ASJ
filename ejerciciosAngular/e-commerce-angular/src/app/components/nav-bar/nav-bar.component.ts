import { Component, OnInit } from '@angular/core';
import { ApiEcommerceService } from '../../services/api-ecommerce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  countCart:number = 0;

  constructor(public api_service: ApiEcommerceService, private route: Router){}

  ngOnInit(): void {
    this.countCart = this.api_service.countCart()
  }

}
