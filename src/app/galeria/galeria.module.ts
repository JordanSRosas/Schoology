import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';
import { GuardarProductoComponent } from './guardar-producto/guardar-producto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductosComponent,
    Prod1Component,
    Prod2Component,
    GuardarProductoComponent
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductosComponent,
    Prod1Component,
    Prod2Component,
    GuardarProductoComponent
  ]
})
export class GaleriaModule { }
