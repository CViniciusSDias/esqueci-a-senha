import {StringService} from '../providers/string.service';

export class Acesso {
    public pergunta = '';
    public resposta = '';
    public email = '';

    public estaValido(): boolean {
        return !StringService.empty(this.pergunta)
            && !StringService.empty(this.resposta)
            && !StringService.empty(this.email)
            && StringService.isEmail(this.email);
    }
}
