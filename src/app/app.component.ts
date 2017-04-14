import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SlidesPage } from './../pages/slides/slides';
import { LoginPage } from './../pages/login/login';
import { AcessoService } from './../providers/acesso-service';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    public rootPage;

    constructor(platform: Platform, acessoService: AcessoService) {
        platform.ready().then(() => {
            if (!acessoService.primeiroAcesso()) {
                this.rootPage = LoginPage;
                return;
            }

            this.rootPage = SlidesPage;
        });
    }
}
