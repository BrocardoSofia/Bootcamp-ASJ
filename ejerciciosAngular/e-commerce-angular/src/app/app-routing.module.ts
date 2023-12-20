import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

const routes: Routes = [
  {path:'', component:AllProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'category/:nameCategory/:idCategory', component:CategoryProductsComponent},
  {path:'product/:nameProduct/:idProduct', component:DetailProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
