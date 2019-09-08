import {Senha} from './senha';

describe('Senha', () => {
    it('Should tell if it is valid', () => {
        const senha = new Senha();
        expect(senha.estaValida()).toBeFalsy();
        senha.ondeUsar = 'Teste';
        expect(senha.estaValida()).toBeFalsy();
        senha.senha = '123456';
        expect(senha.estaValida()).toBeTruthy();
    });
});
