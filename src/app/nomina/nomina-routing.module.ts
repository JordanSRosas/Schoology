import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { DocentesComponent } from './docentes/docentes.component';
import { MenuNominaComponent } from './menu-nomina/menu-nomina.component';

const routes: Routes = [
  {path:'', children:[{path:'docente',component:DocentesComponent},
  {path:'admin',component:AdministrativoComponent},
  {path:'menu',component:MenuNominaComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NominaRoutingModule { }
