import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    ErrorComponent,
    LoginComponent,
    RecoverComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccessModule { }
