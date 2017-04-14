import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from './../../providers/login';
import { Acesso } from './../../models/acesso';
import { TabsPage } from './../tabs/tabs';
import { ToastFactory } from '../../providers/toast-factory';
import { AcessoService } from '../../providers/acesso-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    private acesso: Acesso;

    constructor(
        public navCtrl: NavController, private loginService: Login,
        private toast: ToastFactory, private acessoService: AcessoService
    ) {
        let acesso = acessoService.buscarDados();
        this.acesso = new Acesso();
        this.acesso.pergunta = acesso.pergunta;
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
