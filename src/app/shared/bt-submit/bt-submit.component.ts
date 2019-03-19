import { Component, Input } from '@angular/core';

@Component({
  selector: 'bt-submit',
  templateUrl: './bt-submit.component.html'
})
export class BtSubmitComponent {
  @Input()
  public disabled: boolean;
}
