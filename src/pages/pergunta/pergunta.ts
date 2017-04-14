import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Acesso } from './../../models/acesso';
import { LoginPage } from './../login/login';

@Component({
    selector: 'page-pergunta',
    templateUrl: 'pergunta.html'
})
export class PerguntaPage {
    private acesso: Acesso;

    constructor(public navCtrl: NavController) {
        this.acesso = new Acesso();
    }

    public salvarAcesso(): void {
        localStorage.setItem('acesso', JSON.stringify(this.acesso));
        localStorage.setItem('firstView', '0');
        this.navCtrl.setRoot(LoginPage);
    }
}
