import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccessModule } from './access/access.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaModule } from './galeria/galeria.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccessModule,
    HomeModule,
    AppRoutingModule,
    GaleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
