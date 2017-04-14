import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Acesso } from './../../models/acesso';
import { LoginPage } from './../login/login';
import { AcessoService } from './../../providers/acesso-service';
import { ToastFactory } from './../../providers/toast-factory';

@Component({
    selector: 'page-pergunta',
    templateUrl: 'pergunta.html'
})
export class PerguntaPage {
    private acesso: Acesso;

    constructor(public navCtrl: NavController, private acessoService: AcessoService, private toastFactory: ToastFactory) {
        this.acesso = new Acesso();
    }

    public salvarAcesso(): void {
        if (!this.acesso.estaValido()) {
            this.toastFactory.showToastWithButton('Erro. Verifique os dados digitados', 'Ok');
            return;
        }
        this.acessoService.salvar(this.acesso);
        this.acessoService.setPrimeiroAcesso(false);
        this.navCtrl.setRoot(LoginPage);
    }
}
