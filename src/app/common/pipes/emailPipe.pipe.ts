import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({ name: 'emailPipe'})
export class EmailPipePipe implements PipeTransform {

  constructor(private upperCasePipe: UpperCasePipe) { }

  transform(value: any, args?: any): any {
    if (value!=null)
    {
      let split = value.split('@');
      return this.upperCasePipe.transform((<string>split[0])) + "@" + split[0] ;
    }
    return "";
  }

}
