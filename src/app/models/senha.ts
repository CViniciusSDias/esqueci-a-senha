import { StringService } from '../providers/string.service';

/**
 * @TODO Remover get e set inúteis
 */
export class Senha {
    private _id: number = null;
    private _senha: string = null;
    private _ondeUsar: string = null;
    public exibida: boolean = false;

    public get id(): number { return this._id; }
    public set id(id: number) { this._id = id; }

    public get senha(): string { return this._senha; }
    public set senha(senha: string) { this._senha = senha }

    public get ondeUsar(): string { return this._ondeUsar; }
    public set ondeUsar(ondeUsar: string) { this._ondeUsar = ondeUsar }

    public estaValida(): boolean {
        return !StringService.empty(this._senha) && !StringService.empty(this._ondeUsar);
    }
}