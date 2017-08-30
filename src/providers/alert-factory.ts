import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertFactory {

    constructor(public alertCtrl: AlertController) { }

    public getConfirm(titulo: string, texto: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let confirm = this.alertCtrl.create({
                title: titulo,
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
            });

            confirm.present();
        });
    }
}
