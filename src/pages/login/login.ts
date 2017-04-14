import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from './../../providers/login';
import { Acesso } from './../../models/acesso';
import { TabsPage } from './../tabs/tabs';
import { ToastFactory } from '../../providers/toast-factory';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    private acesso: Acesso;

    constructor(public navCtrl: NavController, private loginService: Login, private toast: ToastFactory) {
        let acessoSalvo: any = JSON.parse(localStorage.getItem('acesso'));
        this.acesso = new Acesso();
        this.acesso.pergunta = acessoSalvo._pergunta;
        this.acesso.email = acessoSalvo._email;
    }

    public logar(): void {
        let logado = this.loginService.logar(this.acesso.resposta);

        if (!logado) {
            this.toast.showToastWithButton('Dados inválidos', 'Ok');
            return;
        }

        this.navCtrl.setRoot(TabsPage);
    }
}
