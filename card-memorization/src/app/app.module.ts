import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardmemogameComponent } from './cardmemogame/cardmemogame.component';
import { CardinputComponent } from './cardmemogame/cardinput/cardinput.component';
import { CardlistComponent } from './cardmemogame/cardlist/cardlist.component';
import { FormsModule } from '@angular/forms';
import { CarddeckComponent } from './cardmemogame/carddeck/carddeck.component';

@NgModule({
  declarations: [
    AppComponent,
    CardmemogameComponent,
    CardinputComponent,
    CardlistComponent,
    CarddeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
