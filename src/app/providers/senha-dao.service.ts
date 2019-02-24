import { Injectable } from '@angular/core';
import {ConnectionFactoryService} from './connection-factory.service';
import {Senha} from '../models/senha';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenhaDaoService {

  private readonly con: any;

  public constructor(factory: ConnectionFactoryService) {
    this.con = factory.getConnection();

    if (localStorage.getItem('imported') === null) {
      this.importData();
    }
  }

  public inserir(senha: Senha): Promise<Senha> {
    const sql = 'INSERT INTO senha (onde_usar, senha) VALUES (?, ?);';
    const params = [senha.ondeUsar, senha.senha];

    return new Promise((resolve, reject) => {
      this.con.transaction(tx => tx.executeSql(sql, params, () => {
        resolve(senha);
      }, () => reject('Erro ao inserir senha')));
    });
  }

  public buscarTodas(): Promise<Senha[]> {
    const sql = 'SELECT * FROM senha ORDER BY onde_usar;';

    return new Promise((resolve, reject) => {
      this.con.transaction(tx => tx.executeSql(sql, [], (t, rs) => {
        const senhas: Senha[] = [];

        for (let i = 0; i < rs.rows.length; i++) {
          const senha = new Senha();
          senha.id = rs.rows.item(i).id;
          senha.ondeUsar = rs.rows.item(i).onde_usar;
          senha.senha = rs.rows.item(i).senha;

          senhas.push(senha);
        }

        resolve(senhas);
      }, () => reject('Erro ao buscar senhas')));
    });
  }

  public buscarUma(id: number): Observable<Senha> {
    const sql = 'SELECT * FROM senha WHERE id = ?';

    const subject = new Subject<Senha>();

    this.con.transaction(tx => tx.executeSql(sql, [id], (t, rs) => {
      const senha = new Senha();
      const item = rs.rows.item(0);

      senha.id = item.id;
      senha.ondeUsar = item.onde_usar;
      senha.senha = item.senha;

      subject.next(senha);
    }), () => subject.error('Erro ao buscar senha'));

    return subject.asObservable();
  }

  public atualizar(senha: Senha): void {
    const sql = 'UPDATE senha SET onde_usar = ?, senha = ? WHERE id = ?;';
    const params = [senha.ondeUsar, senha.senha, senha.id];

    this.con.transaction(tx => tx.executeSql(sql, params));
  }

  public remover(senha: Senha): void {
    const sql = 'DELETE FROM senha WHERE id = ?;';
    const params = [senha.id];

    this.con.transaction(tx => tx.executeSql(sql, params));
  }

  private importData() {
    const sql = 'SELECT nome, senha FROM login ORDER BY nome;';

    this.con.transaction(tx => {
      tx.executeSql(
          sql,
          [],
          (t, rs) => {
            for (let i = 0; i < rs.rows.length; i++) {
              const senha = new Senha();
              senha.ondeUsar = rs.rows.item(i).nome;
              senha.senha = rs.rows.item(i).senha;
              this.inserir(senha);
            }

            t.executeSql('DROP TABLE login', []);
          },
          null // Provavelmente porque a tabela não existe. Fresh new install
      );
    });

    localStorage.setItem('imported', '1');
  }
}
