import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SenhaDao } from '../../daos/senha.dao';
import { Senha } from '../../models/senha';
import { ToastFactory } from '../../providers/toast-factory';
import { FirebaseService } from '../../providers/firebase-service';

@Component({
    selector: 'page-adicionar',
    templateUrl: 'adicionar.html'
})
export class AdicionarPage {
    private senha: Senha;

    constructor(public navCtrl: NavController, private senhaDao: SenhaDao,
        private toast: ToastFactory, private firebase: FirebaseService
    ) {
        this.senha = new Senha();
    }

    public ionViewDidEnter() {
        this.firebase.logPageView('adicionar');
    }

    public salvarSenha(): void {
        let senha: Senha = this.senha;
        if (!senha.estaValida()) {
            this.toast.showToastWithButton('Preencha todos os campos', 'Ok');
            return;
        }

        this.senhaDao.inserir(senha)
            .then(senha => {
                this.toast.showToastWithButton('Senha cadastrada com sucesso', 'Ok', 2000);
                this.senha = new Senha();
            })
            .catch(erro => this.toast.showToastWithButton(erro, 'Ok', 2000));
    }
}
