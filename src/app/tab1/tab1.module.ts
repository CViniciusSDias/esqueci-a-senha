import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SenhasPage } from './senhas/senhas.page';
import { EditarPage } from './editar/editar.page';
import { PageHeaderModule } from '../shared/page-header/page-header.module';
import { FormSenhaModule } from '../shared/form-senha/form-senha.module';
import { BtSubmitModule } from '../shared/bt-submit/bt-submit.module';
import { SenhaPipePipe } from './senhas/senha-pipe.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PageHeaderModule,
    FormSenhaModule,
    BtSubmitModule,
    RouterModule.forChild([
      {
        path: '',
        component: SenhasPage
      },
      {
        path: 'editar/:senhaId',
        component: EditarPage
      }
    ])
  ],
  declarations: [SenhasPage, EditarPage, SenhaPipePipe]
})
export class Tab1PageModule {}
