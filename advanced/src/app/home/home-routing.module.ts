import { RecherhceComponent } from './recherhce/recherhce.component';
import { ContactComponent } from './contact/contact.component';
import { ParametreComponent } from './parametre/parametre.component';
import { FormationComponent } from './formation/formation.component';
import { ExamensComponent } from './examens/examens.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PontsComponent } from './ponts/ponts.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'exam', component: ExamensComponent },
      { path: 'point', component: PontsComponent },
      { path: 'form', component: FormationComponent },
      { path: 'param', component: ParametreComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'search', component: RecherhceComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
