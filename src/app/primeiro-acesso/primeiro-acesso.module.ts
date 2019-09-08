import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';

import {SlidesPage} from './slides/slides.page';
import {PerguntaPage} from './pergunta/pergunta.page';
import {FormAcessoModule} from '../shared/form-acesso/form-acesso.module';

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
    ],
    declarations: [PerguntaPage, SlidesPage]
})
export class PrimeiroAcessoModule {
}
