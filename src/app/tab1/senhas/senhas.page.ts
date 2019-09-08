import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActionSheetController, IonSearchbar, NavController, Platform} from '@ionic/angular';
import {ToastFactoryService} from '../../providers/toast-factory.service';
import {AlertFactoryService} from '../../providers/alert-factory.service';
import {Senha} from '../../models/senha';
import {SenhaDaoService} from '../../providers/senha-dao.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {NavigationEnd, Router} from '@angular/router';
import {Subject, Subscription, SubscriptionLike} from 'rxjs';
import {buffer, debounceTime, delay, filter, map} from 'rxjs/operators';

@Component({
    selector: 'app-senhas',
    templateUrl: './senhas.page.html',
    styleUrls: ['./senhas.page.scss']
})
export class SenhasPage implements OnInit, OnDestroy {

    public senhas: Senha[] = [];
    public inicializado = false;
    public showSearch = false;
    @ViewChild('busca', {static: false}) public searchBar: IonSearchbar;
    public filtroSenhas = '';
    private navObservable: Subscription;
    private filterObservable = new Subject<string>();
    private backButtonSubscription: SubscriptionLike;

    constructor(private navCtrl: NavController,
                private senhaDao: SenhaDaoService,
                private toast: ToastFactoryService,
                private actionSheetCtrl: ActionSheetController,
                private alertFactory: AlertFactoryService,
                private clipboard: Clipboard,
                private router: Router,
                private platform: Platform
    ) {
    }

    public ngOnInit(): void {
        this.buscarSenhas();
        this.navObservable = this.router
            .events
            .pipe(filter(event => event instanceof NavigationEnd))
            .pipe(filter((event: NavigationEnd) => event.url === '/tabs/tab1'))
            .subscribe(() => this.buscarSenhas());

        this.filterObservable
            .pipe(debounceTime(300))
            .subscribe(filtro => this.filtroSenhas = filtro);

        const stream = this.platform.backButton.pipe(debounceTime(300));
        this.backButtonSubscription = this.platform.backButton
            .pipe(buffer(stream))
            .pipe(map(list => list.length))
            .pipe(filter(count => count === 2))
            .subscribe(_ => navigator['app'].exitApp());
    }

    public ngOnDestroy(): void {
        this.navObservable.unsubscribe();
        this.filterObservable.unsubscribe();
        this.backButtonSubscription.unsubscribe();
    }

    private buscarSenhas(): void {
        this.senhaDao.buscarTodas()
            .then(senhas => {
                this.senhas = senhas;
            }).finally(() => {
            this.inicializado = true;
        });
    }

    public remover(senha: Senha): void {
        this.alertFactory.getConfirm(
            'Apagar',
            `Tem certeza que deseja apagar a senha de ${senha.ondeUsar}?`
        ).then(() => {
            this.senhas = this.senhas.filter(senhaAtual => senhaAtual.id !== senha.id);
            this.senhaDao.remover(senha);
            this.toast.showToastWithButton('Senha removida com sucesso', 'Ok');
        }).catch(() => {/*Usuário clicou em 'não'*/
        });
    }

    public actionSheet(senha: Senha): void {
        this.actionSheetCtrl.create({
            header: senha.ondeUsar,
            buttons: [{
                text: 'Excluir',
                role: 'destructive',
                icon: 'trash',
                handler: () => this.remover(senha)
            }, {
                text: 'Ver / Editar',
                icon: 'create',
                handler: () => this.navCtrl.navigateForward(['/tabs/tab1/editar', senha.id])
            }, {
                text: 'Copiar',
                icon: 'copy',
                handler: () => {
                    this.clipboard.copy(senha.senha).then(() => this.toast.showToast('Senha copiada', 1000));
                }
            }, {
                text: 'Cancelar',
                role: 'cancel',
                icon: 'close'
            }]
        }).then(actionSheet => actionSheet.present());
    }

    public toggleSenhaExibida(senha: Senha, e) {
        senha.exibida = !senha.exibida;
        e.stopPropagation();
    }

    public exibeBusca() {
        this.showSearch = true;

        // Workaround para focar na barra
        // TODO: Buscar solução
        const subject = new Subject();
        subject
            .pipe(delay(1))
            .subscribe(() => this.searchBar.setFocus());
        subject.next();
    }

    public filtarSenhas(filtro) {
        this.filterObservable.next(filtro);
    }

    public escondeBusca() {
        this.showSearch = false;
        this.filtroSenhas = '';
    }

    logout() {
        this.navCtrl.navigateRoot('/login');
    }
}
