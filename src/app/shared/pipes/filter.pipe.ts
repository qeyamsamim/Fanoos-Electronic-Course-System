import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {

    if (!filterString) {
      return value;
    }

    return value.filter( result => {
      return result[propName].toLowerCase().includes(filterString.toLocaleLowerCase());
    });
  }

}

