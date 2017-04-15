import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlterarDadosPage } from './../alterar-dados/alterar-dados';
import { SobrePage } from './../sobre/sobre';

@Component({
    selector: 'page-configuracoes',
    templateUrl: 'configuracoes.html'
})
export class ConfiguracoesPage {

    constructor(public navCtrl: NavController) { }

    public alterarDados(): void {
        this.navCtrl.push(AlterarDadosPage);
    }

    public sobre(): void {
        this.navCtrl.push(SobrePage);
    }
}
