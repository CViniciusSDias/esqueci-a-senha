import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerguntaPage } from './../pergunta/pergunta';

@Component({
    selector: 'page-slides',
    templateUrl: 'slides.html'
})
export class SlidesPage {

    constructor(public navCtrl: NavController) {
        if (localStorage.getItem('firstView') === null) {
            localStorage.setItem('firstView', '1');
        }
    }

    public continuar() {
        this.navCtrl.setRoot(PerguntaPage);
    }
}
