import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Login } from './../../providers/login';
import { Acesso } from './../../models/acesso';
import { TabsPage } from './../tabs/tabs';
import { ToastFactory } from '../../providers/toast-factory';
import { AcessoService } from '../../providers/acesso-service';
import { RecuperacaoService } from '../../providers/recuperacao-service';
import { FirebaseService } from '../../providers/firebase-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    private acesso: Acesso;

    constructor(
        public navCtrl: NavController, private loginService: Login,
        private toast: ToastFactory, private acessoService: AcessoService,
        private recuperacaoService: RecuperacaoService, private loadingCtrl: LoadingController,
        private firebase: FirebaseService
    ) {
        let acesso = acessoService.buscarDados();
        this.acesso = new Acesso();
        this.acesso.pergunta = acesso.pergunta;
    }
    
    public ionViewDidEnter() {
        this.firebase.logPageView('login');
    }

    public logar(): void {
        let logado = this.loginService.logar(this.acesso.resposta);

        if (!logado) {
            this.toast.showToastWithButton('Dados inválidos', 'Ok');
            return;
        }

        this.navCtrl.setRoot(TabsPage);
    }

    public recuperarResposta(): void {
        let loading = this.loadingCtrl.create({
            content: 'Enviando resposta para e-mail cadastrado'
        });
        loading.present();
        this.recuperacaoService.recuperarResposta()
            .subscribe(resposta => {
                this.toast.showToastWithButton('Resposta enviada por e-mail', 'Ok');
                loading.dismiss();
            }, erro => {
                let mensagem: string = erro.json().hasOwnProperty('mensagem')
                    ? erro.json().mensagem
                    : 'Erro ao se conectar com o servidor';
                this.toast.showToastWithButton(mensagem, 'Ok');
                loading.dismiss();
            });
    }
}
