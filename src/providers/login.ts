import { Injectable } from '@angular/core';

@Injectable()
export class Login {

    public logar(resposta: string): boolean {
        let acesso: any = JSON.parse(localStorage.getItem('acesso'));
        if (acesso === null) {
            return false;
        }

        return acesso._resposta === resposta;
    }
}
