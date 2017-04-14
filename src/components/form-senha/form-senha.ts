import { Component, Input } from '@angular/core';
import { Senha } from './../../models/senha';

@Component({
    selector: 'form-senha',
    templateUrl: 'form-senha.html'
})
export class FormSenha {
    @Input()
    public senha: Senha;
}
