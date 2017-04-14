import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlterarDadosPage } from './../alterar-dados/alterar-dados';

@Component({
    selector: 'page-configuracoes',
    templateUrl: 'configuracoes.html'
})
export class ConfiguracoesPage {

    constructor(public navCtrl: NavController) {}

    alterarDados() {
        this.navCtrl.push(AlterarDadosPage);
    }
}
