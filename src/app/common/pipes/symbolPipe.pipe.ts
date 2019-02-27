import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';

@Pipe({ name: 'symbolPipe'})
export class SymbolPipePipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }
  transform(value?: any, currency?: string, symbol: boolean = true): any {
    if (currency != null)
        return this.currencyPipe.transform(0, "", symbol );
  }

}
