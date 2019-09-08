import {Injectable} from '@angular/core';
import {Acesso} from '../models/acesso';

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

    /**
     * Busca por propriedades com underscore (_) implementada pois antes as propriedades estavam definidas assim na classe Acesso
     */
    public buscarDados(): Acesso {
        const acessoSalvo: any = JSON.parse(localStorage.getItem('acesso'));
        if (acessoSalvo === null) {
            return new Acesso();
        }

        const acesso = new Acesso();
        acesso.pergunta = acessoSalvo._pergunta ? acessoSalvo._pergunta : acessoSalvo.pergunta;
        acesso.resposta = acessoSalvo._resposta ? acessoSalvo._resposta : acessoSalvo.resposta;
        acesso.email = acessoSalvo._email ? acessoSalvo._email : acessoSalvo.email;

        return acesso;
    }

    public salvar(acesso: Acesso): void {
        localStorage.setItem('acesso', JSON.stringify(acesso));
    }
}
