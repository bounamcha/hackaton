import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ExamenComponent } from './examen/examen.component';


@NgModule({
  declarations: [AuthComponent, SigninComponent, SignupComponent, ExamenComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class AuthModule { }
