import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtSubmitComponent } from './bt-submit.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [BtSubmitComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [BtSubmitComponent]
})
export class BtSubmitModule { }
