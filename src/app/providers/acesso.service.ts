import { Injectable } from '@angular/core';
import {Acesso} from "../models/acesso";

@Injectable({
  providedIn: 'root'
})
export class AcessoService {

  public primeiroAcesso(): boolean {
    return localStorage.getItem('usos') === null;
  }

  public incrementarAcessos(qtd: number = 1): number {
    let usos: any = parseInt(localStorage.getItem('usos'));
    usos = isNaN(usos) ? 0 : usos;
    usos += qtd;
    localStorage.setItem('usos', usos);

    return usos;
  }

  public buscarDados(): Acesso {
    const acessoSalvo: any = JSON.parse(localStorage.getItem('acesso'));
    if (acessoSalvo === null) {
      return new Acesso();
    }

    const acesso = new Acesso();
    acesso.pergunta = acessoSalvo._pergunta;
    acesso.resposta = acessoSalvo._resposta;
    acesso.email = acessoSalvo._email;

    return acesso;
  }

  public salvar(acesso: Acesso): void {
    localStorage.setItem('acesso', JSON.stringify(acesso));
  }
}
