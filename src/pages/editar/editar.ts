import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Senha } from './../../models/senha';
import { SenhaDao } from './../../daos/senha.dao';
import { ToastFactory } from './../../providers/toast-factory';
import { FirebaseService } from './../../providers/firebase-service';

@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html'
})
export class EditarPage {
    private senha: Senha;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private senhaDao: SenhaDao, private toastCtrl: ToastFactory, private firebase: FirebaseService
    ) {
        this.senha = navParams.get('senha');
    }
    
    public ionViewDidEnter() {
        this.firebase.logPageView('editar');
    }

    public salvarSenha(): void {
        if (!this.senha.estaValida()) {
            this.toastCtrl.showToastWithButton('Preencha todos os campos', 'Ok');
            return;
        }
        this.senhaDao.atualizar(this.senha);
        this.toastCtrl.showToastWithButton('Senha editada com sucesso', 'Ok');
        this.navCtrl.pop();
    }
}
