import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './access/error/error.component';
import { LoginComponent } from './access/login/login.component';
import { RecoverComponent } from './access/recover/recover.component';
import { RegisterComponent } from './access/register/register.component';
import { ProfileComponent } from './home/profile/profile.component';
import { NominaModule } from './nomina/nomina.module';

const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'recover', component:RecoverComponent },
  { path:'error', component:ErrorComponent },
  { path:'profile', component:ProfileComponent },
  { path:'Nomina', loadChildren:() => import('./nomina/nomina.module'). then(m => m.NominaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
