import { Component, OnInit } from '@angular/core';
import {Money} from '../model/Money';
import {DatabaseService} from '../services/database.service';
import {JsonBitcoinCurrencyService} from '../services/json-bitcoin-currency.service';
import {BitcoinCurrencyTable} from '../model/BitcoinCurrencyTable';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  time: Date;

  money_in_bitcoin: Money;
  money_in_Currency: Money;
  unix_time: number;
  liveBitcoinPrice: Money;
  kursPrzewidywany: Money;
  obecnaInwestycja: boolean;
  // jest obecnie bot ma kupione bitcoiny to true
  przewidywaniaKursow: Array<Money> = [];
  kursyRzeczywiste: Array<Money> = [];
  // money_history: Array<Money> = [];

  constructor(private databaseService: DatabaseService, private httpService: JsonBitcoinCurrencyService) { }

  ngOnInit() {
    this.pobierzPrzewidywanieNaNastDzien();
    this.timeService();
  }

  doladujKonto (doladowanie: number) {
    this.money_in_Currency.amount += doladowanie;
  }

  private wymienNaBitcoiny(): void {
    if (!this.obecnaInwestycja) {
      this.kursyRzeczywiste.push(this.liveBitcoinPrice);
      this.money_in_bitcoin.amount = this.money_in_Currency.amount / this.liveBitcoinPrice.amount;
      this.obecnaInwestycja = !this.obecnaInwestycja;
    }
  }

  private wymienNaWalute(): void {
    if (this.obecnaInwestycja) {
      this.kursyRzeczywiste.push(this.liveBitcoinPrice);
      this.money_in_Currency.amount = this.money_in_bitcoin.amount * this.liveBitcoinPrice.amount;
      this.obecnaInwestycja = !this.obecnaInwestycja;
    }
  }

  private pobierzPrzewidywanieNaNastDzien() {

    this.databaseService.getPredictionOfBitcoin().subscribe(data => {
      this.kursPrzewidywany = data;
      this.przewidywaniaKursow.push(this.kursPrzewidywany);
    });

    this.httpService.getBitcoinCurrencyTable().subscribe(data => {
      this.liveBitcoinPrice.amount = data.bpi.USD.rate_float;
      this.liveBitcoinPrice.currency = data.bpi.USD.code;
    });

    if (this.kursPrzewidywany > this.liveBitcoinPrice) {
      this.wymienNaBitcoiny();
    } else {
      this.wymienNaWalute();
    }
  }

  timeService(): void {
    setInterval(() => {
      this.time = new Date();
      if (this.time.getHours() === 1 && this.time.getMinutes() === 30) {
        this.pobierzPrzewidywanieNaNastDzien();
      }
    }, 1000);
  }

}
