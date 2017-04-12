import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastFactory {

    constructor(public toastCtrl: ToastController) { }

    public showToastWithButton(message: string, closeButtonText: string, duration: number = 10000) {
        let showCloseButton = true;
        this.toastCtrl.create({message, showCloseButton, closeButtonText, duration}).present();
    }

    public showToast(message: string, duration: number = 3000) {
        const showCloseButton = false;
        this.toastCtrl.create({message, showCloseButton, duration}).present();
    }
}
