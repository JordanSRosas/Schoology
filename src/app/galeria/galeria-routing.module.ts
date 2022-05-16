import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';

const routes: Routes = [
  {path: '', children:[
    {path:'prod/:clave', component: Prod1Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriaRoutingModule { }
