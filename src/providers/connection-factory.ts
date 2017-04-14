import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionFactory {

    public getConnection() {
        let db = openDatabase('senhas', '2.0', 'senhas', 2 * 1024 * 1024);

        this.createSchema(db);
        return db;
    }

    private createSchema(db) {
        let sql = `
            CREATE TABLE IF NOT EXISTS senha (
                id INTEGER PRIMARY KEY,
                onde_usar TEXT NOT NULL,
                senha TEXT NOT NULL
            );
        `;

        db.transaction(tx => tx.executeSql(sql, []));
    }
}
