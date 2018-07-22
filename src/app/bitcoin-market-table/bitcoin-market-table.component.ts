import { Component, OnInit } from '@angular/core';
import {BitcoinModel} from '../model/BitcoinModel';
import {JsonBitcoinCurrencyService} from '../services/json-bitcoin-currency.service';

@Component({
  selector: 'app-bitcoin-market-table',
  templateUrl: './bitcoin-market-table.component.html',
  styleUrls: ['./bitcoin-market-table.component.css']
})
export class BitcoinMarketTableComponent implements OnInit {

  bitcoinMarketTableArray: Array<BitcoinModel> = [];

  constructor(private jsonService: JsonBitcoinCurrencyService) { }

  ngOnInit() {
    this.getBitcoinMarketTable();
  }

  getBitcoinMarketTable() {
    this.jsonService.getBitcoinMarketTable().subscribe(data => {
      this.bitcoinMarketTableArray = data;
    });
  }

  dateConventer(unixTime: number): string {
    const date =  new Date(unixTime * 1000);
    return date.getDay() + ' ' + date.getMonth() + ' ' + date.getFullYear();
  }

}
