import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHeaderComponent} from './page-header.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [PageHeaderComponent]
})
export class PageHeaderModule { }
