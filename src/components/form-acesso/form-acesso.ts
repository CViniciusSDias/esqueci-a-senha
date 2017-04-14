import { Component, Input } from '@angular/core';
import { Acesso } from './../../models/acesso';

@Component({
    selector: 'form-acesso',
    templateUrl: 'form-acesso.html'
})
export class FormAcesso {
    @Input()
    public acesso: Acesso;

    public constructor() {
        this.acesso = new Acesso();
    }
}
