import { Injectable } from '@angular/core';
import { AcessoService } from './acesso-service';

@Injectable()
export class Login {

    public constructor(private acessoService: AcessoService) {}

    public logar(resposta: string): boolean {
        let acesso = this.acessoService.buscarDados();

        return acesso.resposta.toLowerCase() === resposta.toLowerCase();
    }
}
