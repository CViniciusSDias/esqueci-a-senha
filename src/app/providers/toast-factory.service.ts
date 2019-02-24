import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastFactoryService {

  constructor(public toastCtrl: ToastController) { }

  public showToastWithButton(message: string, closeButtonText: string, duration: number = 5000) {
    let showCloseButton = true;
    this.toastCtrl.create({message, showCloseButton, closeButtonText, duration})
        .then(toast => toast.present());
  }

  public showToast(message: string, duration: number = 3000, position: 'bottom' | 'top' | 'middle' = 'bottom') {
    const showCloseButton = false;
    this.toastCtrl.create({message, showCloseButton, duration, position})
        .then(toast => toast.present());
  }
}
