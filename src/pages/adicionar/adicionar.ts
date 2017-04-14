import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SenhaDao } from '../../daos/senha.dao';
import { Senha } from '../../models/senha';
import { ToastFactory } from '../../providers/toast-factory';
import { FormSenha } from './../../components/form-senha/form-senha';

@Component({
    selector: 'page-adicionar',
    templateUrl: 'adicionar.html'
})
export class AdicionarPage {
    @ViewChild(FormSenha)
    private formSenha: FormSenha;

    constructor(
        public navCtrl: NavController, public navParams: NavParams,
        private senhaDao: SenhaDao, private toast: ToastFactory
    ) { }

    public salvarSenha(): void {
        let senha: Senha = this.formSenha.senha;
        if (!senha.estaValida()) {
            this.toast.showToastWithButton('Preencha todos os campos', 'Ok');
            return;
        }

        this.senhaDao.inserir(senha);
        this.toast.showToast('Senha cadastrada com sucesso');
        this.formSenha.senha = new Senha();
    }
}
