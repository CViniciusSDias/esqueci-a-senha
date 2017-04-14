import { Injectable } from '@angular/core';
import { Acesso } from './../models/acesso';

@Injectable()
export class AcessoService {
    public primeiroAcesso(): boolean {
        return localStorage.getItem('firstView') === '0';
    }

    public setPrimeiroAcesso(primeiroAcesso: boolean) {
        localStorage.setItem('firstView', primeiroAcesso ? '1' : '0');
    }

    public buscarDados(): Acesso {
        let acessoSalvo: any = JSON.parse(localStorage.getItem('acesso'));
        if (acessoSalvo === null) {
            return new Acesso();
        }

        let acesso = new Acesso();
        acesso.pergunta = acessoSalvo._pergunta;
        acesso.resposta = acessoSalvo._resposta;
        acesso.email = acessoSalvo._email;

        return acesso;
    }

    public salvar(acesso: Acesso): void {
        localStorage.setItem('acesso', JSON.stringify(acesso));
    }
}
