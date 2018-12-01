import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import {Response} from '@angular/http';


import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import 'rxjs/Rx/';

import { Question } from '../Models/question';

@Injectable()
export class QuestionService {
  private _serviceUrl = 'http://localhost:3000/questions';  // URL to web api

  constructor(private http: Http) {
  }

  getQuestions(): Observable<Question[]> {
    const url = this._serviceUrl;
    return this.http.get(url).
      map(res => res.json() );
  }

}
