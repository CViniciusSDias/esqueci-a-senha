import {StringService} from '../providers/string.service';

export class Senha {
    public id: number = null;
    public senha: string = null;
    public login: string = null;
    public ondeUsar: string = null;
    public exibida = false;

    public estaValida(): boolean {
        return !StringService.empty(this.senha) && !StringService.empty(this.ondeUsar);
    }
}
