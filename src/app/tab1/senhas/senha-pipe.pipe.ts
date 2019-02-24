import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'senha_pipe'
})
export class SenhaPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const senhaExibida = args[0];
    if (senhaExibida) {
      return value;
    }

    return value.replace(/./g, '*');
  }
}
