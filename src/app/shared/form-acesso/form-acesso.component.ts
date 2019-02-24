import {Component, Input} from '@angular/core';
import {Acesso} from '../../models/acesso';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'form-acesso',
  templateUrl: './form-acesso.component.html',
})
export class FormAcessoComponent {
  @Input() public acesso: Acesso;

  constructor() {
    this.acesso = new Acesso();
  }
}
