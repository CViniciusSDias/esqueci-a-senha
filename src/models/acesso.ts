import { StringHelper } from '../providers/string-helper';

export class Acesso {
    private _pergunta: string;
    private _resposta: string;
    private _email: string;

    public get pergunta(): string { return this._pergunta; }
    public set pergunta(pergunta: string) { this._pergunta = pergunta; }

    public get resposta(): string { return this._resposta; }
    public set resposta(resposta: string) { this._resposta = resposta; }

    public get email(): string { return this._email; }
    public set email(email: string) { this._email = email; }

    public estaValido(): boolean {
        return !StringHelper.empty(this._pergunta)
            && !StringHelper.empty(this._resposta)
            && !StringHelper.empty(this._email);
    }
}