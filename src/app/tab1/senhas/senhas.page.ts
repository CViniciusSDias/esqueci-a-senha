import { Component, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController, NavController } from '@ionic/angular';
import { ToastFactoryService } from '../../providers/toast-factory.service';
import { AlertFactoryService } from '../../providers/alert-factory.service';
import { Senha } from '../../models/senha';
import { SenhaDaoService } from '../../providers/senha-dao.service';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-senhas',
  templateUrl: './senhas.page.html',
  styleUrls: ['./senhas.page.scss'],
})
export class SenhasPage implements OnInit {

  public senhas: Senha[] = [];
  public inicializado = false;

  constructor(public router: NavController, public senhaDao: SenhaDaoService,
              private toast: ToastFactoryService, private actionSheetCtrl: ActionSheetController,
              private alertFactory: AlertFactoryService, private loadingCtrl: LoadingController,
              private clipboard: Clipboard
  ) { }

  public ngOnInit(): void {
    this.buscarSenhas();
  }

  private buscarSenhas(): void {
    this.loadingCtrl.create({
      message: 'Carregando'
    }).then(loading => {
      loading.present();
      this.senhaDao.buscarTodas()
          .then(senhas => {
            this.senhas = senhas;
            loading.dismiss();
            this.inicializado = true;
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

  public actionSheet(senha: Senha): void {
    this.actionSheetCtrl.create({
      header: senha.ondeUsar,
      buttons: [
        {
          text: 'Excluir',
          role: 'destructive',
          icon: 'trash',
          handler: () => { this.remover(senha); }
        },
        {
          text: 'Ver / Editar',
          icon: 'create',
          handler: () => {
            this.router.navigateForward(['/tabs/tab1/editar', senha.id]);
          }
        },
        {
          text: 'Copiar',
          icon: 'copy',
          handler: () => {
            this.clipboard.copy(senha.senha)
              .then(() => this.toast.showToast('Senha copiada', 1000));
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close'
        }
      ]
    }).then(actionSheet => actionSheet.present());
  }

  public toggleSenhaExibida(senha: Senha, e) {
    senha.exibida = !senha.exibida;
  }
}