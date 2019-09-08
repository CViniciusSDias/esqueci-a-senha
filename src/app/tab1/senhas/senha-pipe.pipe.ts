import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'senha_pipe'
})
export class SenhaPipePipe implements PipeTransform {

    transform(value: any, senhaExibida: boolean): string {
        if (senhaExibida) {
            return value;
        }

        return value.replace(/./g, '*');
    }
}
