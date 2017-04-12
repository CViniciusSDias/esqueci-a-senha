import { Injectable } from '@angular/core';

@Injectable()
export class StringHelper {

    public static empty(string) {
        return string === undefined || string === '';
    }
}
