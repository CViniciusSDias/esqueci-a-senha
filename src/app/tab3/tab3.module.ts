import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppVersion } from '@ionic-native/app-version/ngx';

import { AlterarDadosPage } from './alterar-dados/alterar-dados.page';
import { SobrePage } from './sobre/sobre.page';
import { ConfiguracoesPage } from './configuracoes/configuracoes.page';
import { PageHeaderModule } from '../shared/page-header/page-header.module';
import { FormAcessoModule } from '../shared/form-acesso/form-acesso.module';
import { BtSubmitModule } from '../shared/bt-submit/bt-submit.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PageHeaderModule,
    FormAcessoModule,
    BtSubmitModule,
    RouterModule.forChild([
      {
          path: '',
          component: ConfiguracoesPage
      },
      {
        path: 'alterar-dados',
        component: AlterarDadosPage
      },
      {
        path: 'sobre',
        component: SobrePage
      }
    ])
  ],
  declarations: [ConfiguracoesPage, AlterarDadosPage, SobrePage],
  providers: [ AppVersion ]
})
export class Tab3PageModule {}
