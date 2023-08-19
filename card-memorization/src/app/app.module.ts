import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardmemogameComponent } from './cardmemogame/cardmemogame.component';
import { CardinputComponent } from './cardmemogame/cardinput/cardinput.component';
import { CardlistComponent } from './cardmemogame/cardlist/cardlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CardmemogameComponent,
    CardinputComponent,
    CardlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
