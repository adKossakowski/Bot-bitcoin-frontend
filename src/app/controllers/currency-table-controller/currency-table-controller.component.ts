import { Component, OnInit } from '@angular/core';
import {JsonBitcoinCurrencyService} from '../../services/json-bitcoin-currency.service';

@Component({
  selector: 'app-currency-table-controller',
  templateUrl: './currency-table-controller.component.html',
  styleUrls: ['./currency-table-controller.component.css']
})
export class CurrencyTableControllerComponent implements OnInit {
  
  getCurrencyTable(): Observable<> {

  }


  constructor(private jsonCurrency: JsonBitcoinCurrencyService) { }

  ngOnInit() {
    this.getCurrencyTable();
  }

}
