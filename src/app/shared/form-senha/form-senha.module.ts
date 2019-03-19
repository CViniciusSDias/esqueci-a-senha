import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { BtSubmitModule } from '../bt-submit/bt-submit.module';
import { FormSenhaComponent } from './form-senha.component';

@NgModule({
  declarations: [FormSenhaComponent],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    BtSubmitModule
  ],
  exports: [FormSenhaComponent]
})
export class FormSenhaModule { }
