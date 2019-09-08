import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdicionarPage} from './adicionar/adicionar.page';
import {PageHeaderModule} from '../shared/page-header/page-header.module';
import {FormSenhaModule} from '../shared/form-senha/form-senha.module';
import {BtSubmitModule} from '../shared/bt-submit/bt-submit.module';

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
                component: AdicionarPage
            }
        ])
    ],
    declarations: [AdicionarPage]
})
export class Tab2PageModule {
}
