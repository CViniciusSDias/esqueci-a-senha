import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertFactoryService {

  constructor(public alertCtrl: AlertController) { }

  public getConfirm(titulo: string, texto: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.alertCtrl.create({
        header: titulo,
        message: texto,
        buttons: [
          {
            text: 'Não',
            handler: () => { reject(); }
          },
          {
            text: 'Sim',
            handler: () => { resolve(); }
          }
        ]
      }).then(confirm => confirm.present());
    });
  }
}
