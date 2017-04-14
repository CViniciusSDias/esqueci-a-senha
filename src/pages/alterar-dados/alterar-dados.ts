import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Acesso } from './../../models/acesso';
import { ToastFactory } from './../../providers/toast-factory';

@Component({
    selector: 'page-alterar-dados',
    templateUrl: 'alterar-dados.html'
})
export class AlterarDadosPage {
    private acesso: Acesso;

    constructor(public navCtrl: NavController, private toastFactory: ToastFactory) {
        this.carregarDados();
    }

    public carregarDados(): void {
        let acesso: any = JSON.parse(localStorage.getItem('acesso'));
        this.acesso = new Acesso();
        this.acesso.pergunta = acesso._pergunta;
        this.acesso.resposta = acesso._resposta;
        this.acesso.email = acesso._email;
    }

    public salvarDados(): void {
        localStorage.setItem('acesso', JSON.stringify(this.acesso));
        this.toastFactory.showToast('Dados alterados com sucesso');
        this.navCtrl.pop();
    }
}
