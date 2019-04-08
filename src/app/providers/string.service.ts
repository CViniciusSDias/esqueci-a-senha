import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  public static empty(string): boolean {
    return typeof string !== 'string' || string.length === 0;
  }

  public static isEmail(email: string): boolean {
    const regex = new RegExp(/^[a-z0-9-._]+@[a-z0-9-._]+\.([a-z]+)+$/);

    return regex.test(email);
  }
}
