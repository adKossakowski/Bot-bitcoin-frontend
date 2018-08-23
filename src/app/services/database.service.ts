import { Injectable } from '@angular/core';
import {Money} from '../model/Money';
import {HttpClient} from '@angular/common/http';
import {PredictionParameters} from '../model/PredictionParameters';
import {RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ChartDataParameters} from '../model/ChartDataParameters';

@Injectable()
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getPredictionOfBitcoin() {
    // return this.http.get<Money>('http://127.0.0.1:8080/currency/database');
  }

  newDedicatedPrediction(predictionParameters: PredictionParameters) {
    return this.http.get<PredictionParameters>('http://127.0.0.1:8080/currency/dedicatedPrediction',
      { params: {'trainingSet': predictionParameters.train_size.toString(),
          'testingSet': predictionParameters.test_size.toString(),
          // 'predictionWindow': predictionParameters.window_size.toString()}}).map((res: Response) => res.json());
          'predictionWindow': predictionParameters.window_size.toString()}});
  }

  newDefaultPrediction(): void  {
    this.http.get('http://127.0.0.1:8080/currency/defaultPrediction').subscribe(
      res => { console.log(res);
    },
      err => {
        console.log('Error');
      });
  }

  getPredictionParameters(): Observable<PredictionParameters> {
    return this.http.get<PredictionParameters>('http://127.0.0.1:8080/currency/predictionParamters');
  }

  mapPrediction(response: Response): PredictionParameters {
    return this.toPredictionParameters(response.json());
  }

  toPredictionParameters(r: any): PredictionParameters {
    return r;
  }

  getChartData(): Observable<Array<ChartDataParameters>> {
    return this.http.get<Array<ChartDataParameters>>('http://127.0.0.1:8080/currency/chartData');
  }
}
