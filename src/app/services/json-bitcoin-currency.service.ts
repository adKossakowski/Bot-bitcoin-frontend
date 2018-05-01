import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BitcoinModel} from '../model/BitcoinModel';
import {BitcoinCurrencyTable} from '../model/BitcoinCurrencyTable';

@Injectable()
export class JsonBitcoinCurrencyService {

  getBitcoinMarketTable(): Observable<Array<BitcoinModel>> {
    return this.http.get<Array<BitcoinModel>>('https://bitbay.net/API/Public/BTCPLN/trades.json?since=43');
  }

  getBitcoinCurrencyTable() {
    return this.http.get<BitcoinCurrencyTable>('https://api.coindesk.com/v1/bpi/currentprice.json');
  }


  constructor(private http: HttpClient) { }

}
