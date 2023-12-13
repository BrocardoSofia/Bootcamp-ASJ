import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AsideInfoComponent } from './components/aside-info/aside-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainPageComponent,
    AsideInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
