import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionHistoryComponent } from './components/section-history/section-history.component';
import { MainCharactersComponent } from './components/main-characters/main-characters.component';
import { AsidePlacesComponent } from './components/aside-places/aside-places.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionHistoryComponent,
    MainCharactersComponent,
    AsidePlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
