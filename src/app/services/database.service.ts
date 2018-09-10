import { Injectable } from '@angular/core';
import {Money} from '../model/Money';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PredictionParameters} from '../model/PredictionParameters';
import {Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ChartDataParameters} from '../model/ChartDataParameters';
import {Bot} from '../model/Bot';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseService {

  constructor(private http: HttpClient, private httpRest: Http) { }

  getBotData(): Observable<Bot> {
    return this.http.get<Bot>('http://127.0.0.1:8080/currency/getBotData');
  }

  getChartData(): Observable<Array<ChartDataParameters>> {
    return this.http.get<Array<ChartDataParameters>>('http://127.0.0.1:8080/currency/chartData');
  }


  newDedicatedPrediction(test, train, window) {
    this.http.get('http://127.0.0.1:8080/currency/dedicatedPrediction',
      { params: {'trainSet': train,
          'testSet': test,
          'predWindow': window}, headers: {
          'Access-Control-Allow-Origin': '*'
        }}).subscribe();
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

  initApplication(): void {
    console.log('InitApplicationIside');
    this.http.get('http://127.0.0.1:8080/currency/initProgram').subscribe(
      res => { console.log(res);
      },
      err => {
        console.log('Error');
      });
  }
}
