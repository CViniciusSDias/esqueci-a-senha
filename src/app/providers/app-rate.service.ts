import { Injectable } from '@angular/core';
import { AppRate } from '@ionic-native/app-rate/ngx';

@Injectable({
  providedIn: 'root'
})
export class AppRateService {

  constructor(private appRate: AppRate) { }

  public naoRespondeu() {
    const itemEmSessao = localStorage.getItem('naoRespondeu');

    return itemEmSessao === null || itemEmSessao === 'true';
  }

  public naoExibiuNessaSessao() {
    return sessionStorage.getItem('appRate') === null;
  }

  public pedirAvaliacao(qtdAcessos: number) {
    sessionStorage.setItem('appRate', '1');
    const imediatamente = qtdAcessos >= 3 && this.naoRespondeu();

    this.appRate.preferences.storeAppURL = {
      android: 'market://details?id=dias.vinicius.esqueciasenha'
    };
    this.appRate.preferences.customLocale = {
      cancelButtonLabel: 'Não, valeu!',
      appRatePromptTitle: 'Está gostando do aplicativo?',
      feedbackPromptTitle: 'Feedback prompt title',
      laterButtonLabel: 'Lembrar-me depois',
      message: 'Nos avalie na Play Store e diga o que está achando do app Esqueci a Senha!',
      noButtonLabel: 'Nem tanto',
      rateButtonLabel: 'Avaliar agora',
      title: 'Nos avalie na Play Store',
      yesButtonLabel: 'Estou!'
    };
    this.appRate.promptForRating(imediatamente);
    this.appRate.preferences.callbacks = {
      onButtonClicked: (tipoBotao: number, nomeBotao: string) => {
        this.salvarSeUsuarioRespondeu(nomeBotao);
      }
    };
  }

  private salvarSeUsuarioRespondeu(nomeBotao: string) {
    const botoesValidos = ['Não, valeu!', 'Nem tanto', 'Avaliar agora'];
    const respondeu = botoesValidos.indexOf(nomeBotao) > -1;

    localStorage.setItem('naoRespondeu', respondeu ? 'false' : 'true');
  }
}
