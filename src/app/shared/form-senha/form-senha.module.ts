import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSenhaComponent } from './form-senha.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FormSenhaComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [FormSenhaComponent]
})
export class FormSenhaModule { }
