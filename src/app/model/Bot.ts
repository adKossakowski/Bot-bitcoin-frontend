import {Money} from './Money';

export class Bot {
  money_in_bitcoin: Money;
  money_in_cCurrency: Money;
  unix_time: number;
  money_history: Array<Money> = [];
}
