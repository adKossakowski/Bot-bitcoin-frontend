import {Component, OnInit} from '@angular/core';
import { PredictionParameters } from './model/PredictionParameters';
import {DatabaseService} from './services/database.service';
import {ChartDataParameters} from './model/ChartDataParameters';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  predictionParameters: PredictionParameters;
  data_origin: Array<ChartDataParameters>;

  constructor(private databaseService: DatabaseService) {

  }

  data = null;

  // data = [[new Date('2018/07/22'), 1, 2]
  //       ];

  options = {width: '1000', height: '400',
    // customBars: true,
    legend: 'always',
    labels: ['Data', 'Kurs Bitcoina', 'Przewidywania'],
    xlabel: 'X label text', ylabel: 'Y label text', title: 'Working title :)',
    animatedZooms: true, pointSize: 4};

  ngOnInit() {
    console.log('init application');
    this.databaseService.initApplication();

    this.databaseService.getChartData().subscribe(d => {

      for (let i = 0; i < d.length; i++) {
        this.data.push([d[i].date, d[i].prediction, d[i].currency]);
      }

    });
   //  this.databaseService.getChartData().subscribe( d => {
   //    console.log('chartData');
   //    console.log('PP' + d);
   //    this.data_origin = d;
   //  });
   //  console.log('Length' + this.data_origin.length);
   // for (let i = 0; i < this.data_origin.length; i++) {
   //   this.data.push([this.data_origin[i].date, this.data_origin[i].prediction, this.data_origin[i].currency]);
   // }
  }

  getDefaultPrediction(): void {
    this.databaseService.newDefaultPrediction();
  }

  getDedicatedPrediction(test, train, window): void {
    // this.predictionParameters = new PredictionParameters;
    this.predictionParameters.train_size = train;
    this.predictionParameters.test_size = test;
    this.predictionParameters.window_size = window;
    this.databaseService.newDedicatedPrediction(this.predictionParameters);
    setTimeout(3000);
  }

}

// <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js" async>
// {
//   "symbols": [
//     {
//       "title": "BTC/USD",
//       "proName": "BITFINEX:BTCUSD"
//     },
//     {
//       "description": "BTC/EUR",
//       "proName": "BITFINEX:BTCEUR"
//     },
//     {
//       "description": "BTC/GBP",
//       "proName": "BITFINEX:BTCGBP"
//     }
//   ],
//   "locale": "pl"
// }
// </script>
