import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SlidesPage } from './../pages/slides/slides';
import { LoginPage } from './../pages/login/login';
import { AcessoService } from './../providers/acesso-service';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    public rootPage;

    constructor(platform: Platform, acessoService: AcessoService, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            splashScreen.hide();
            if (!acessoService.primeiroAcesso()) {
                this.rootPage = LoginPage;
                return;
            }

            this.rootPage = SlidesPage;
        });
    }
}
