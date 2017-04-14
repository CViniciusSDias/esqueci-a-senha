import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AcessoService } from './acesso-service';
import { Observable } from 'rxjs';

@Injectable()
export class RecuperacaoService {

    constructor(private http: Http, private acessoService: AcessoService) {}

    public recuperarResposta(): Observable<Response> {
        let acesso = this.acessoService.buscarDados();
        let dados = {
            email: acesso.email,
            resposta: acesso.resposta
        };

        return this.http
            .post('http://zer0.w.pw/esqueci-a-senha/esqueci', JSON.stringify(dados));
    }
}
