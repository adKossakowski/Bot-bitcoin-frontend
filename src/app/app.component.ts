import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = [[new Date('2008/05/07'), 1715],
         [new Date('2008/05/08'), 1170],
         [new Date('2008/05/09'), 1180],
          [new Date('2008/05/10'), 1120],
            [new Date('2008/05/11'), 1120]
        ];

  options = {width: '1000', height: '400',
    // customBars: true,
    legend: 'always',
    labels: ['Data','Kurs Bitcoina'],
    xlabel: 'X label text', ylabel: 'Y label text', title: 'Working title :)',
    animatedZooms: true, pointSize: 4};


  // new TradingView.widget();

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
