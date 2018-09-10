import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrencyTableControllerComponent } from './controllers/currency-table-controller/currency-table-controller.component';
import { BitcoinMarketTableComponent } from './bitcoin-market-table/bitcoin-market-table.component';
import {JsonBitcoinCurrencyService} from './services/json-bitcoin-currency.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BitcoinRatesComponent } from './bitcoin-rates/bitcoin-rates.component';
import { BotComponent } from './bot/bot.component';
import {DatabaseService} from './services/database.service';
import { NgDygraphsModule } from 'ng-dygraphs';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyTableControllerComponent,
    BitcoinMarketTableComponent,
    BitcoinRatesComponent,
    BotComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgDygraphsModule
  ],
  providers: [JsonBitcoinCurrencyService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
