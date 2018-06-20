import { Component, OnInit } from '@angular/core';
import {BitcoinCurrencyTable} from '../model/BitcoinCurrencyTable';
import {JsonBitcoinCurrencyService} from '../services/json-bitcoin-currency.service';

@Component({
  selector: 'app-bitcoin-rates',
  templateUrl: './bitcoin-rates.component.html',
  styleUrls: ['./bitcoin-rates.component.css']
})
export class BitcoinRatesComponent implements OnInit {

  bitcoinRates: BitcoinCurrencyTable;

  constructor(private jsonService: JsonBitcoinCurrencyService) { }

  ngOnInit() {
    this.getJsonService();
    this.timeService();
  }

  timeService(): void {
    setInterval(() => {
      this.getJsonService();
    }, 300000);
  }

  getJsonService() {
    this.jsonService.getBitcoinCurrencyTable().subscribe(data => {
      this.bitcoinRates = data;
    });
  }

}
