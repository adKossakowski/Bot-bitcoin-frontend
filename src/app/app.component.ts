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

  // data: any;

  data = [[new Date('2018/07/23'), 8112.93, 8112.93]];

  options = {width: '1000', height: '400',
    // customBars: true,
    legend: 'always',
    labels: ['Data', 'Kurs Bitcoina', 'Przewidywania'],
    xlabel: 'X label text', ylabel: 'Y label text', title: 'Working title :)',
    animatedZooms: true, pointSize: 4};

  ngOnInit() {
    this.databaseService.initApplication();
    this.databaseService.getChartData().subscribe(d => {

      for (let i = 0; i < d.length; i++) {
        this.data.push([new Date(d[i].date), d[i].prediction, d[i].currency]);
      }
    });

  }

  getDefaultPrediction(): void {
    this.databaseService.newDefaultPrediction();
  }

  getDedicatedPrediction(test, train, window): void {
    this.databaseService.newDedicatedPrediction(test, train, window);
    setTimeout(3000);
  }

}

