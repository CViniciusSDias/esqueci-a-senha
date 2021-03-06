import {Component, OnInit} from '@angular/core';
import {Acesso} from '../../models/acesso';
import {ToastFactoryService} from '../../providers/toast-factory.service';
import {AcessoService} from '../../providers/acesso.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-alterar-dados',
    templateUrl: './alterar-dados.page.html',
    styleUrls: ['./alterar-dados.page.scss'],
})
export class AlterarDadosPage implements OnInit {
    public acesso: Acesso;

    constructor(private navCtrl: NavController,
                private toastFactory: ToastFactoryService,
                private acessoService: AcessoService
    ) {
    }

    public ngOnInit(): void {
        this.acesso = this.acessoService.buscarDados();
    }

    public salvarDados(): void {
        if (!this.acesso.estaValido()) {
            this.toastFactory.showToastWithButton('Erro. Verifique os dados digitados', 'Ok');
            return;
        }
        this.acessoService.salvar(this.acesso);
        this.toastFactory.showToastWithButton('Dados alterados com sucesso', 'Ok', 1000);
        this.navCtrl.navigateBack(['/tabs/tab3']);
    }
}
