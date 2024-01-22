import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormularioSimpsonsComponent } from './components/formulario-simpsons/formulario-simpsons.component';
import { HomeComponent } from './components/home/home.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { PrimeNumbersPipe } from './pipes/prime-numbers.pipe';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    AsideMenuComponent,
    FooterComponent,
    MainComponent,
    ToDoListComponent,
    NavBarComponent,
    FormularioSimpsonsComponent,
    HomeComponent,
    PageErrorComponent,
    PipesExampleComponent,
    PrimeNumbersPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
