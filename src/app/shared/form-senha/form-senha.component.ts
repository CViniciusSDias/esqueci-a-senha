import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Senha } from '../../models/senha';

@Component({
  selector: 'form-senha',
  templateUrl: './form-senha.component.html',
  styleUrls: ['./form-senha.component.scss'],
})
export class FormSenhaComponent implements OnChanges {
  @Input()
  public senha: Senha;
  @Output()
  public submitEmitter = new EventEmitter<Senha>();
  public icone = 'eye';
  public tipoCampoSenha = 'password';
  public formGroup: FormGroup;

  public constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.senha || typeof this.senha === 'undefined') {
      return;
    }

    this.formGroup = this.formBuilder.group({
      ondeUsar: [this.senha.ondeUsar, Validators.required],
      login: [this.senha.login],
      senha: [this.senha.senha, Validators.required]
    });
  }

  public toggleSenha(): void {
    if (this.icone === 'eye') {
      this.icone = 'eye-off';
      this.tipoCampoSenha = 'text';
      return;
    }

    this.icone = 'eye';
    this.tipoCampoSenha = 'password';
  }

  submitForm() {
    this.senha.ondeUsar = this.formGroup.get('ondeUsar').value;
    this.senha.login = this.formGroup.get('login').value;
    this.senha.senha = this.formGroup.get('senha').value;
    this.submitEmitter.next(this.senha);
  }
}
