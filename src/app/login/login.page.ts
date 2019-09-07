import {Component, OnDestroy, OnInit} from '@angular/core';
import { Acesso } from '../models/acesso';
import { AcessoService } from '../providers/acesso.service';
import { ToastFactoryService } from '../providers/toast-factory.service';
import { LoginService } from '../providers/login.service';
import { RecuperacaoService } from '../providers/recuperacao.service';
import {LoadingController, NavController, Platform} from '@ionic/angular';
import { AppRateService } from '../providers/app-rate.service';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  public acesso: Acesso;
  private backButtonSubscription;

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

    this.backButtonSubscription = this.platform.backButton.subscribe(_ => navigator['app'].exitApp());
  }

  public ngOnDestroy(): void {
    this.backButtonSubscription.unsubscribe();
  }

  public logar(): void {
    const estaLogado = this.loginService.logar(this.acesso.resposta);

    if (!estaLogado) {
      this.toast.showToastWithButton('Dados inválidos', 'Ok');
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
          () => this.toast.showToastWithButton('Resposta enviada por e-mail', 'Ok'),
          (erro: HttpErrorResponse) => {
            this.toast.showToastWithButton('Ocorreu um erro inesperado', 'Ok');
          }
        );
    });
  }
}
