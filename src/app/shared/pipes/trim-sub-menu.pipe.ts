import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimSubMenu'
})
export class TrimSubMenuPipe implements PipeTransform {
  trimmedVal = '';

  transform(value: string): string {
    if (value) {
      value.split(' ').slice(1).forEach(element => {
        this.trimmedVal += ' ' + element;
      });
    }
    return this.trimmedVal;
  }
}
