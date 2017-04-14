import { Senha } from './../models/senha';
import { ConnectionFactory } from './../providers/connection-factory';
import { Injectable } from '@angular/core';

@Injectable()
export class SenhaDao {
    private con: any;

    public constructor(factory: ConnectionFactory) {
        this.con = factory.getConnection();
    }

    public inserir(senha: Senha): Promise<Senha> {
        let sql = 'INSERT INTO senha (onde_usar, senha) VALUES (?, ?);';
        let params = [senha.ondeUsar, senha.senha];

        return new Promise((resolve, reject) => {
            this.con.transaction(tx => tx.executeSql(sql, params, (t, rs) => {
                resolve(senha);
            }, () => reject('Erro ao inserir senha')));
        });
    }

    public buscarTodas(): Promise<Senha[]> {
        let sql = 'SELECT * FROM senha ORDER BY onde_usar;';

        return new Promise((resolve, reject) => {
            this.con.transaction(tx => tx.executeSql(sql, [], (t, rs) => {
                let senhas: Senha[] = [];

                for (let i = 0; i < rs.rows.length; i++) {
                    let senha = new Senha();
                    senha.id = rs.rows.item(i).id;
                    senha.ondeUsar = rs.rows.item(i).onde_usar;
                    senha.senha = rs.rows.item(i).senha;

                    senhas.push(senha);
                }

                resolve(senhas);
            }, () => reject('Erro ao buscar senhas')));
        });
    }

    public atualizar(senha: Senha): void {
        let sql = 'UPDATE senha SET onde_usar = ?, senha = ? WHERE id = ?;';
        let params = [senha.ondeUsar, senha.senha, senha.id];

        this.con.transaction(tx => tx.executeSql(sql, params));
    }

    public remover(senha: Senha): void {
        let sql = 'DELETE FROM senha WHERE id = ?;';
        let params = [senha.id];

        this.con.transaction(tx => tx.executeSql(sql, params));
    }

    /*private inicializar()
    {
        this.buscarTodas().then(senhas => {
            if (senhas.length === 0) {
                let senha = new Senha();
                senha.ondeUsar = 'Teste';
                senha.senha = 'teste';
                this.inserir(senha);
            }
        });
    }*/
}