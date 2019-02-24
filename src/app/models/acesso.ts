import { StringService } from '../providers/string.service';

export class Acesso {
    private _pergunta = '';
    private _resposta = '';
    private _email = '';

    public get pergunta(): string { return this._pergunta; }
    public set pergunta(pergunta: string) { this._pergunta = pergunta; }

    public get resposta(): string { return this._resposta; }
    public set resposta(resposta: string) { this._resposta = resposta; }

    public get email(): string { return this._email; }
    public set email(email: string) { this._email = email; }

    public estaValido(): boolean {
        return !StringService.empty(this._pergunta)
            && !StringService.empty(this._resposta)
            && !StringService.empty(this._email)
            && StringService.isEmail(this._email);
    }
}
