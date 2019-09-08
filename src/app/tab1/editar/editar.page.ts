import {Component, OnInit} from '@angular/core';
import {Senha} from '../../models/senha';
import {ActivatedRoute} from '@angular/router';
import {ToastFactoryService} from '../../providers/toast-factory.service';
import {SenhaDaoService} from '../../providers/senha-dao.service';
import {map, switchMap} from 'rxjs/operators';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-editar',
    templateUrl: './editar.page.html',
    styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
    public senha: Senha;

    constructor(private router: NavController,
                private senhaDao: SenhaDaoService,
                private toastCtrl: ToastFactoryService,
                private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(map(params => params.senhaId))
            .pipe(switchMap(senhaId => this.senhaDao.buscarUma(senhaId)))
            .subscribe(senha => this.senha = senha);
    }

    public salvarSenha(): void {
        if (!this.senha.estaValida()) {
            this.toastCtrl.showToastWithButton('Preencha todos os campos', 'Ok');
            return;
        }

        this.senhaDao.atualizar(this.senha);
        this.toastCtrl.showToastWithButton('Senha editada com sucesso', 'Ok');
        this.router.navigateBack('/tabs/tab1');
    }
}
