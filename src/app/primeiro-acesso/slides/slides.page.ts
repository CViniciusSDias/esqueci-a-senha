import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.page.html',
    styleUrls: ['./slides.page.scss'],
})
export class SlidesPage {

    constructor(private navCtrl: NavController) {
    }

    continuar() {
        this.navCtrl.navigateRoot('/primeiro-acesso/definir-pergunta');
    }
}
