import { Injectable } from '@angular/core';
import {AcessoService} from "./acesso.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public constructor(private acessoService: AcessoService) {}

  public logar(resposta: string): boolean {
    const acesso = this.acessoService.buscarDados();

    return acesso.resposta.trim().toLowerCase() === resposta.trim().toLowerCase();
  }
}
