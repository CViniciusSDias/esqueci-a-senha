import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
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
        private toast: ToastFactory, private actionSheetCtrl: ActionSheet,
        private alertFactory: AlertFactory, private loadingCtrl: LoadingController
    ) { }

    private buscarSenhas(): void {
        let loading = this.loadingCtrl.create({
            content: 'Carregando'
        });

        loading.present().then(() => {
            this.senhaDao.buscarTodas()
                .then(senhas => {
                    this.senhas = senhas;
                    loading.dismiss();
                });
        });
    }

    public remover(senha: Senha): void {
        this.alertFactory.getConfirm(
            'Apagar',
            `Tem certeza que deseja apagar a senha de ${senha.ondeUsar}?`
        ).then(() => {
            this.senhas.splice(this.senhas.indexOf(senha), 1);
            this.senhaDao.remover(senha);
            this.toast.showToastWithButton('Senha removida com sucesso', 'Ok');
        }).catch(() => {/*Usuário clicou em 'não'*/});
    }

    public ionViewWillEnter(): void {
        this.buscarSenhas();
    }

    public actionSheet(senha: Senha): void {
        let options: ActionSheetOptions = {
            title: senha.ondeUsar,
            buttonLabels: ['Excluir'],
            addDestructiveButtonWithLabel: 'Editar',
            addCancelButtonWithLabel: 'Cancelar'
        };

        this.actionSheetCtrl.show(options).then((buttonIndex: number) => {
            switch (buttonIndex) {
                case 0: // Excluir
                    this.remover(senha);
                    break;
                case 1: // Editar
                    this.navCtrl.push(EditarPage, {senha});
                    break;
            }
        });
    }
}
