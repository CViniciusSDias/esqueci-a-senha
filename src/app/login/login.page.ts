import {Component, OnDestroy, OnInit} from '@angular/core';
import {Acesso} from '../models/acesso';
import {AcessoService} from '../providers/acesso.service';
import {ToastFactoryService} from '../providers/toast-factory.service';
import {LoginService} from '../providers/login.service';
import {RecuperacaoService} from '../providers/recuperacao.service';
import {LoadingController, NavController, Platform} from '@ionic/angular';
import {AppRateService} from '../providers/app-rate.service';
import {HttpErrorResponse} from '@angular/common/http';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public acesso: Acesso;

    constructor(private acessoService: AcessoService,
                public navCtrl: NavController,
                private toast: ToastFactoryService,
                private loginService: LoginService,
                private recuperacaoService: RecuperacaoService,
                private loadingCtrl: LoadingController,
                private appRate: AppRateService,
                private platform: Platform
    ) {
        this.acesso = new Acesso();
        this.acesso.pergunta = acessoService.buscarDados().pergunta;
    }

    public ngOnInit() {
        const qtdAcessos = this.acessoService.incrementarAcessos();
        if (this.platform.is('android') && this.appRate.naoExibiuNessaSessao()) {
            this.appRate.pedirAvaliacao(qtdAcessos);
        }
    }

    public logar(): void {
        const estaLogado = this.loginService.logar(this.acesso.resposta);

        if (!estaLogado) {
            this.toast.showToast('Dados inválidos', 3000, 'top');
            return;
        }

        this.navCtrl.navigateRoot('/tabs/tab1');
    }

    public recuperarResposta(): void {
        this.loadingCtrl.create({
            message: 'Enviando resposta para e-mail cadastrado'
        }).then(loading => {
            loading.present();

            this.recuperacaoService.recuperarResposta()
                .pipe(finalize(() => loading.dismiss()))
                .subscribe(
                    () => this.toast.showToast('Resposta enviada por e-mail', 3000, 'bottom'),
                    (erro: HttpErrorResponse) => {
                        this.toast.showToast('Ocorreu um erro inesperado', 3000, 'bottom');
                    }
                );
        });
    }
}
