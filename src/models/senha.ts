import { StringHelper } from '../providers/string-helper';

export class Senha {
    private _id: number;
    private _senha: string;
    private _ondeUsar: string;

    public get id(): number { return this._id; }
    public set id(id: number) { this._id = id; }

    public get senha(): string { return this._senha; }
    public set senha(senha: string) { this._senha = senha }

    public get ondeUsar(): string { return this._ondeUsar; }
    public set ondeUsar(ondeUsar: string) { this._ondeUsar = ondeUsar }

    public estaValida(): boolean {
        return !StringHelper.empty(this._senha) && !StringHelper.empty(this._ondeUsar);
    }
}
