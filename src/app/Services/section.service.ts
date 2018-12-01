import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx/';

@Injectable()
export class SectionService {

  private _serviceUrl = 'http://localhost:3000/sections';  // URL to web api

  constructor(private http: Http) {
  }

  getSections(): Observable<String[]> {
    const url = this._serviceUrl;
    return this.http.get(url).
    map(res => res.json());
  }
}
