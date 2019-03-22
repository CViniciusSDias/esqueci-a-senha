import { Injectable } from '@angular/core';

declare function openDatabase(name: string, version: string, displayName: string, size: number);

@Injectable({
  providedIn: 'root'
})
export class ConnectionFactoryService {

  public getConnection() {
    const db = openDatabase('senhas', '1.0', 'senhas', 2 * 1024 * 1024);

    this.createSchema(db);
    return db;
  }

  private createSchema(db) {
    db.transaction(tx => {
      tx.executeSql(
        `
          CREATE TABLE IF NOT EXISTS senha (
              id INTEGER PRIMARY KEY,
              onde_usar TEXT NOT NULL,
              login TEXT DEFAULT NULL,
              senha TEXT NOT NULL
          );
        `,
        []
      );

      tx.executeSql(
        'ALTER TABLE senha ADD login VARCHAR DEFAULT NULL',
        [],
        () => console.log('sucesso'),
        (t, erro) => {
          if (!erro.message.includes('1 duplicate column name: login')) {
            console.error(erro);
          }
        }
      );
    });
  }
}
