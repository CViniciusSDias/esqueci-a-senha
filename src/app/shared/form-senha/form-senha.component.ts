import {Component, Input, OnInit} from '@angular/core';
import {Senha} from '../../models/senha';

@Component({
  selector: 'form-senha',
  templateUrl: './form-senha.component.html',
  styleUrls: ['./form-senha.component.scss'],
})
export class FormSenhaComponent {
  @Input()
  public senha: Senha;
  public icone = 'eye';
  public tipoCampoSenha = 'password';

  public toggleSenha(): void {
    if (this.icone === 'eye') {
      this.icone = 'eye-off';
      this.tipoCampoSenha = 'text';
      return;
    }

    this.icone = 'eye';
    this.tipoCampoSenha = 'password';
  }
}
