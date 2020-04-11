import {PipeTransform,Pipe} from '@angular/core';

@Pipe({
  name:"categoryFilter"
})
export class CategoryFilter implements PipeTransform{
  transform(value: string): string {
    let newStr: string = value;
    // for (var i = value.length - 1; i >= 0; i--) {
    //   newStr += value.charAt(i);
    // }
    return newStr;
  }
}
