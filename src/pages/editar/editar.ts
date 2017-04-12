import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Senha } from './../../models/senha';
import { SenhaDao } from './../../daos/senha.dao';
import { ToastFactory } from './../../providers/toast-factory';

@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html'
})
export class EditarPage {
    private senha: Senha;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private senhaDao: SenhaDao, private toastCtrl: ToastFactory
    ) {
        this.senha = navParams.get('senha');
    }

    public salvarSenha() {
        this.senhaDao.atualizar(this.senha);
        this.toastCtrl.showToast('Senha editada com sucesso');
    }
}
