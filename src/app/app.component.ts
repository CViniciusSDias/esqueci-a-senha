import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SlidesPage } from '../pages/slides/slides';
import { LoginPage } from '../pages/login/login';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    public rootPage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            if (localStorage.getItem('firstView') === '0') {
                this.rootPage = LoginPage;
                return;
            }

            this.rootPage = SlidesPage;
        });
    }
}
