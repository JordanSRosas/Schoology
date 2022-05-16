import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccessModule } from './access/access.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaModule } from './galeria/galeria.module';
import { HomeModule } from './home/home.module';
import { NominaModule } from './nomina/nomina.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccessModule,
    HomeModule,
    AppRoutingModule,
    GaleriaModule,
    NominaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
