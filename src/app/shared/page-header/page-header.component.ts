import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'page-header',
    templateUrl: './page-header.component.html'
})
export class PageHeaderComponent {

    constructor(private navCtrl: NavController) {
    }

    public logOut(): void {
        this.navCtrl.navigateRoot('/login');
    }

}
