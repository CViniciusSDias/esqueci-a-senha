import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {AcessoService} from '../../providers/acesso.service';
import {ToastFactoryService} from '../../providers/toast-factory.service';
import {Acesso} from '../../models/acesso';

@Component({
    selector: 'app-pergunta',
    templateUrl: './pergunta.page.html',
    styleUrls: ['./pergunta.page.scss'],
})
export class PerguntaPage implements OnInit {
    public acesso: Acesso;

    constructor(private navCtrl: NavController,
                private acessoService: AcessoService,
                private toastFactory: ToastFactoryService
    ) {
    }

    public ngOnInit() {
        this.acesso = this.acessoService.buscarDados();
    }

    public salvarAcesso(): void {
        if (!this.acesso.estaValido()) {
            this.toastFactory.showToastWithButton('Erro. Verifique os dados digitados', 'Ok');
            return;
        }

        this.acessoService.salvar(this.acesso);
        this.navCtrl.navigateRoot('/login');
    }
}
