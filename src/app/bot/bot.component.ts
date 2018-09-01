import { Component, OnInit } from '@angular/core';
import {Money} from '../model/Money';
import {DatabaseService} from '../services/database.service';
import {JsonBitcoinCurrencyService} from '../services/json-bitcoin-currency.service';
import {BitcoinCurrencyTable} from '../model/BitcoinCurrencyTable';
import {Bot} from '../model/Bot';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  bot: Bot = null;

  constructor(private databaseService: DatabaseService, private httpService: JsonBitcoinCurrencyService) { }

  ngOnInit() {
    this.bot.ostatniePrzewidywania = 1;
    this.bot.ostatniKurs = 2;
    this.databaseService.getBotData().subscribe(r => {
      this.bot = r;
    });
  }

}
