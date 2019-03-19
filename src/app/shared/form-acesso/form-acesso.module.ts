import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { FormAcessoComponent } from './form-acesso.component';
import { BtSubmitModule } from '../bt-submit/bt-submit.module';

@NgModule({
  declarations: [FormAcessoComponent],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    BtSubmitModule
  ],
  exports: [FormAcessoComponent]
})
export class FormAcessoModule { }
