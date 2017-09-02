import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerguntaPage } from './../pergunta/pergunta';
import { FirebaseService } from './../../providers/firebase-service';

@Component({
    selector: 'page-slides',
    templateUrl: 'slides.html'
})
export class SlidesPage {

    constructor(public navCtrl: NavController, private firebase: FirebaseService) { }

    public ionViewDidEnter() {
        this.firebase.logPageView('slides');
    }

    public continuar() {
        this.navCtrl.setRoot(PerguntaPage);
    }
}
