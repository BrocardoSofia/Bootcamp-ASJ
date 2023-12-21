import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

const routes: Routes = [
  {path:'', component:AllProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'product/:nameProduct/:idProduct', component:DetailProductComponent},
  {path:'filter',
    children:[
      {path:'', pathMatch: 'full', redirectTo:''},
      {path:'title/:title', 
        children:[
          {path:'',component:AllProductsComponent},
          {path:'price/:price', component:AllProductsComponent},
          {path:'price/:price/price_range/:min/:max', component:AllProductsComponent},
          {path:'price/:price/category/:idCategory', component:AllProductsComponent},
          {path:'price/:price/price_range/:min/:max/category/:idCategory', component:AllProductsComponent},
          {path:'price_range/:min/:max', component:AllProductsComponent},
          {path:'price_range/:min/:max/category/:idCategory', component:AllProductsComponent},
          {path:'category/:idCategory', component:AllProductsComponent}
        ]},
      {path:'price/:price', 
        children:[
          {path:'',component:AllProductsComponent},
          {path:'price_range/:min/:max', component:AllProductsComponent},
          {path:'price_range/:min/:max/category/:idCategory', component:AllProductsComponent},
          {path:'category/:idCategory', component:AllProductsComponent}
      ]},
      {path:'price_range/:min/:max', 
        children:[
          {path:'',component:AllProductsComponent},
          {path:'category/:idCategory', component:AllProductsComponent}
      ]},
      {path:'category/:idCategory', component:AllProductsComponent}
      
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
