import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAcessoComponent } from './form-acesso.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FormAcessoComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [FormAcessoComponent]
})
export class FormAcessoModule { }
