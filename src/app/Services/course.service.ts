import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx/';


import { Course } from '../models/course';

@Injectable()
export class CourseService {

  private _serviceUrl = 'http://localhost:3000/courses';  // URL to web api

  constructor(private http: Http) {
  }

  getCourses(): Observable<Course[]> {
    const  url = this._serviceUrl;
    return this.http.get(url).
       map(res => res.json());
  }
}
