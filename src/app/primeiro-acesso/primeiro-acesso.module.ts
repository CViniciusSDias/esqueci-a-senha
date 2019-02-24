import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidesPage } from './slides/slides.page';
import { PerguntaPage } from './pergunta/pergunta.page';
import { FormAcessoModule } from '../shared/form-acesso/form-acesso.module';
import { BtSubmitModule } from '../shared/bt-submit/bt-submit.module';

const routes: Routes = [
  {
    path: 'slides',
    component: SlidesPage
  },
  {
    path: 'definir-pergunta',
    component: PerguntaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormAcessoModule,
    BtSubmitModule
  ],
  declarations: [PerguntaPage, SlidesPage]
})
export class PrimeiroAcessoModule { }
