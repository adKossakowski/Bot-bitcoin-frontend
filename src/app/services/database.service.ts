import { Injectable } from '@angular/core';
import {Money} from '../model/Money';
import {HttpClient} from '@angular/common/http';
import {PredictionParameters} from '../model/PredictionParameters';
import {RequestOptions} from '@angular/http';

@Injectable()
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getPredictionOfBitcoin() {
    // return this.http.get<Money>('http://127.0.0.1:8080/currency/database');
  }

  newDedicatedPrediction(predictionParameters: PredictionParameters) {
    // return this.http.get<PredictionParameters>('http://127.0.0.1:8080/currency/dedicatedPrediction',
    //   { params: {'trainingSet': predictionParameters.trainingSet.toString(),
    //       'testingSet': predictionParameters.testingSet.toString(),
    //       'predictionWindow': predictionParameters.predictionWindow.toString()}});
  }

  newDefaultPrediction(): void  {
    this.http.get('http://127.0.0.1:8080/currency/defaultPrediction').subscribe(
      res => { console.log(res);
    },
      err => {
        console.log('Error');
      });
  }

  getPredictionParameters() {
    // return this.http.get<PredictionParameters>('http://127.0.0.1:8080/currency/predictionParamters');
  }
}
