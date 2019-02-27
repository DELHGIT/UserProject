import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { from } from 'rxjs';

@Pipe({  name: 'customeCurrency'})
@Injectable()
export class CustomeCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: any, currency: string, symbol: boolean = false): string {
    if (value != null)
        return this.currencyPipe.transform(value, currency, symbol );
    return this.currencyPipe.transform(0, currency, symbol).split('0.00')[0];
  }

}
