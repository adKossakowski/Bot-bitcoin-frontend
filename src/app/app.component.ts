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

  predictionParameters: PredictionParameters = null;
  data: Array<ChartDataParameters> = null;

  constructor(private databaseService: DatabaseService) {

  }

  // data = [[new Date('2008/05/07'), 1, 2],
  //        [new Date('2008/05/08'), 2, 3],
  //        [new Date('2008/05/09'), 3, 4],
  //        [new Date('2008/05/10'), 10, 11],
  //        [new Date('2008/05/11'), 9, 15]
  //       ];

  options = {width: '1000', height: '400',
    // customBars: true,
    legend: 'always',
    labels: ['Data', 'Kurs Bitcoina', 'Przewidywania'],
    xlabel: 'X label text', ylabel: 'Y label text', title: 'Working title :)',
    animatedZooms: true, pointSize: 4};

  ngOnInit() {
    this.databaseService.getChartData().subscribe( d => {
      this.data = d;
    });
    this.predictionParameters.test_size = 1;
    this.predictionParameters.train_size = 1;
    this.predictionParameters.window_size = 1;
    // this.getPredictionParameters();
    this.timeService();

    // this.databaseService.getPredictionParameters().subscribe(data => {
    //   this.predictionParameters = data;
    // });
  }

  getPredictionParameters(): void {
    this.databaseService.getPredictionParameters().subscribe( data => {
        this.predictionParameters = data;
      },
      err => {
        console.log('Connection error');
      });
  }

  timeService(): void {
    setInterval(() => {
      this.getPredictionParameters();
    }, 300000);
  }

  getDefaultPrediction(): void {
    this.databaseService.newDefaultPrediction();
  }

  getDedicatedPrediction(): void {
    this.databaseService.newDedicatedPrediction(this.predictionParameters);
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
