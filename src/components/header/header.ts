import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from './../../pages/login/login';

@Component({
    selector: 'page-header',
    templateUrl: 'header.html'
})
export class Header {
    public constructor(private app: App, private navCtrl: NavController) {}

    public logOut(): void {
        let root = this.app.getRootNavs()[0];
        root.setRoot(LoginPage);
    }
}