import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  public static empty(string): boolean {
    return string === undefined || string === '';
  }

  public static isEmail(email: string): boolean {
    let regex = new RegExp(/^[a-z0-9-._]+@[a-z0-9-._]+\.([a-z]+)+$/);

    return regex.test(email);
  }
}
