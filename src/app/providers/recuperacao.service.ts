import {Injectable} from '@angular/core';
import {AcessoService} from './acesso.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RecuperacaoService {

    constructor(private acessoService: AcessoService, private http: HttpClient) {
    }

    public recuperarResposta(): Observable<HttpResponse<any>> {
        const acesso = this.acessoService.buscarDados();
        const dados = {
            email: acesso.email,
            resposta: acesso.resposta
        };

        const url = 'https://esqueci-a-senha.herokuapp.com/recuperar/resposta';
        return this.http
            .post<any>(url, dados, {observe: 'response'});
    }
}
