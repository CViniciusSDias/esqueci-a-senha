import {Component} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AcessoService} from './providers/acesso.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: NavController,
        private acessoService: AcessoService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();

            const url = this.acessoService.primeiroAcesso()
                ? '/primeiro-acesso/slides'
                : '/login';

            this.router.navigateRoot(url)
                .then(() => this.splashScreen.hide());
        });
    }
}
