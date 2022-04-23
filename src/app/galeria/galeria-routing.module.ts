import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';

const routes: Routes = [
  { path:'', children: [
    { path:'Producto1', component:Prod1Component },
    { path:'Producto2', component:Prod2Component }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriaRoutingModule { }
