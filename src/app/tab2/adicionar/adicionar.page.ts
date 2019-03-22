import { Component } from '@angular/core';
import { Senha } from '../../models/senha';
import { ToastFactoryService } from '../../providers/toast-factory.service';
import { SenhaDaoService } from '../../providers/senha-dao.service';

@Component({
    selector: 'page-adicionar',
    templateUrl: 'adicionar.page.html'
})
export class AdicionarPage {
    public senha: Senha;

    constructor(private senhaDao: SenhaDaoService,
                private toast: ToastFactoryService
    ) {
        this.senha = new Senha();
    }

    public salvarSenha(): void {
        if (!this.senha.estaValida()) {
            this.toast.showToastWithButton('Preencha todos os campos', 'Ok');
            return;
        }

        this.senhaDao.inserir(this.senha)
            .then(() => {
                this.toast.showToastWithButton('Senha cadastrada com sucesso', 'Ok', 2000);
                this.senha = new Senha();
            })
            .catch(erro => this.toast.showToastWithButton(erro, 'Ok', 2000));
    }
}
