import { Pipe, PipeTransform } from '@angular/core';
import {Senha} from '../../models/senha';

@Pipe({
  name: 'filtroSenhas'
})
export class FiltroSenhasPipe implements PipeTransform {

  transform(senhas: Senha[], filtro: string): Senha[] {
    if (filtro.length === 0) {
      return senhas;
    }

    return senhas.filter(senha => senha.ondeUsar.toLowerCase().includes(filtro.toLowerCase()));
  }

}
