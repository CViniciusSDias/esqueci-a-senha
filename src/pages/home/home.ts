import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { Senha } from './../../models/senha';
import { SenhaDao } from './../../daos/senha.dao';
import { ToastFactory } from './../../providers/toast-factory';
import { AlertFactory } from './../../providers/alert-factory';
import { EditarPage } from './../../pages/editar/editar';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public senhas: Senha[] = [];

    constructor(public navCtrl: NavController, public senhaDao: SenhaDao,
        private toast: ToastFactory, private actionSheetCtrl: ActionSheetController,
        private alertFactory: AlertFactory
    ) { }

    private buscarSenhas() {
        this.senhaDao.buscarTodas()
            .then(senhas => this.senhas = senhas);
    }

    public remover(senha: Senha) {
        this.alertFactory.getConfirm(
            'Apagar',
            `Tem certeza que deseja apagar a senha de ${senha.ondeUsar}?`
        ).then(() => {
            this.senhas.splice(this.senhas.indexOf(senha), 1);
            this.senhaDao.remover(senha);
            this.toast.showToast('Senha removida com sucesso');
        }).catch(() => {/*Usuário clicou em 'não'*/});
    }

    public ionViewWillEnter() {
        this.buscarSenhas();
    }

    public actionSheet(senha: Senha) {
        this.actionSheetCtrl.create({
            title: senha.ondeUsar,
            buttons: [
                {
                    text: 'Excluir',
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => this.remover(senha)
                },
                {
                    text: 'Editar',
                    icon: 'create',
                    handler: () => this.navCtrl.push(EditarPage, {senha: senha})
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    icon: 'close'
                }
            ]
        }).present();
    }
}
