import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseService } from './../../providers/firebase-service';

@Component({
    selector: 'page-sobre',
    templateUrl: 'sobre.html'
})
export class SobrePage {

    constructor(public navCtrl: NavController, private firebase: FirebaseService) {}
    
    public ionViewDidEnter() {
        this.firebase.logPageView('sobre');
    }
}
