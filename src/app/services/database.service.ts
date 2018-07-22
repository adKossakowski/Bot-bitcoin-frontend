import { Injectable } from '@angular/core';
import {Money} from '../model/Money';
import {HttpClient} from '@angular/common/http';
import {PredictionParameters} from '../model/PredictionParameters';
import {RequestOptions} from '@angular/http';

@Injectable()
export class DatabaseService {

  getPredictionOfBitcoin() {
    return this.http.get<Money>('http://127.0.0.1:8080/currency/database');
  }

  newDedicatedPrediction(predictionParameters: PredictionParameters) {
    return this.http.get<PredictionParameters>('http://127.0.0.1:8080/currency',
      { params: {'trainingSet': predictionParameters.trainingSet.toString(),
          'testingSet': predictionParameters.testingSet.toString(),
          'predictionWindow': predictionParameters.predictionWindow.toString()}});
  }

  newDefaultPrediction() {
    console.log('Hello3');
    return this.http.get<PredictionParameters>('http://127.0.0.1:8080/currency/');
  }

  getPredictionParameters() {
    console.log('Hello2');
    return this.http.get<PredictionParameters>('http://127.0.0.1:8080/currency/');
  }

  constructor(private http: HttpClient) { }

}
