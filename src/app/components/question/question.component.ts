import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../../Models';
import {QuestionService} from '../../Services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Question[];
  sub: any;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.sub = this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
