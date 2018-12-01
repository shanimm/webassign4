import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from './components/course/course.component';
import {SectionComponent} from './components/section/section.component';
import {QuestionComponent} from './components/question/question.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent
  },
  {
    path: 'courses',
    component: CourseComponent
  },
  {
    path: 'sections',
    component: SectionComponent
  },
  {
    path: 'questions',
    component: QuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
