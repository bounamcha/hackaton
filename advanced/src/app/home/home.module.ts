import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { ExamensComponent } from './examens/examens.component';
import { PontsComponent } from './ponts/ponts.component';
import { ParametreComponent } from './parametre/parametre.component';
import { FormationComponent } from './formation/formation.component';
import { ContactComponent } from './contact/contact.component';
import { RecherhceComponent } from './recherhce/recherhce.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ExamensComponent, PontsComponent, ParametreComponent, FormationComponent, ContactComponent, RecherhceComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
