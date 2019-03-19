import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Acesso} from '../../models/acesso';

@Component({
  selector: 'form-acesso',
  templateUrl: './form-acesso.component.html',
})
export class FormAcessoComponent implements OnChanges {
  @Input() public acesso: Acesso;
  @Output() public submitEmitter = new EventEmitter<Acesso>();
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.acesso = new Acesso();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.acesso) {
      return;
    }

    this.formGroup = this.formBuilder.group({
      pergunta: [this.acesso.pergunta, Validators.required],
      resposta: [this.acesso.resposta, Validators.required],
      email: [this.acesso.email, [
        Validators.required,
        Validators.email
      ]],
    });
  }

  submitForm() {
    this.acesso.pergunta = this.formGroup.get('pergunta').value;
    this.acesso.resposta = this.formGroup.get('resposta').value;
    this.acesso.email = this.formGroup.get('email').value;
    this.submitEmitter.emit(this.acesso);
  }
}
