import { Injectable } from '@angular/core';

@Injectable()
export class StringHelper {

    public static empty(string): boolean {
        return string === undefined || string === '';
    }

    public static isEmail(email: string): boolean {
        let regex = new RegExp(/^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,}/);

        return regex.test(email);
    }
}
