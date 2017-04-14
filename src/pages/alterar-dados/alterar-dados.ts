import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Acesso } from './../../models/acesso';
import { ToastFactory } from './../../providers/toast-factory';
import { AcessoService } from './../../providers/acesso-service';

@Component({
    selector: 'page-alterar-dados',
    templateUrl: 'alterar-dados.html'
})
export class AlterarDadosPage {
    private acesso: Acesso;

    constructor(
        public navCtrl: NavController, private toastFactory: ToastFactory,
        private acessoService: AcessoService
    ) {
        this.carregarDados();
    }

    public carregarDados(): void {
        this.acesso = this.acessoService.buscarDados();
    }

    public salvarDados(): void {
        this.acessoService.salvar(this.acesso);
        this.toastFactory.showToast('Dados alterados com sucesso');
        this.navCtrl.pop();
    }
}
