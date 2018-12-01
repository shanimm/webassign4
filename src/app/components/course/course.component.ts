import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from '../../Models';
import {CourseService} from '../../Services/course.service';




@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[];
  sub: any;


  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.sub = this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

ngOnDestroy(){
    if (this.sub)
    {
      this.sub.unsubscribe();
}}

}


