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
    const sql = `
      CREATE TABLE IF NOT EXISTS senha (
          id INTEGER PRIMARY KEY,
          onde_usar TEXT NOT NULL,
          senha TEXT NOT NULL
      );
    `;

    db.transaction(tx => tx.executeSql(sql, []));
  }
}
