import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiEcommerceService } from './services/api-ecommerce.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    AllProductsComponent,
    DetailProductComponent,
    CategoryProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ApiEcommerceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
