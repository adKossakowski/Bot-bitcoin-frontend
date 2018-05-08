import { Injectable } from '@angular/core';
import {Money} from '../model/Money';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DatabaseService {

  getPredictionOfBitcoin() {
    return this.http.get<Money>('127.0.0.1:8080/currency/database');
  }

  constructor(private http: HttpClient) { }

}
