import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { QuestionComponent } from './components/question/question.component';
import { SectionComponent } from './components/section/section.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {CourseService} from './Services/course.service';
import {SectionService} from './Services/section.service';
import {QuestionService} from './Services/question.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { LoginComponent } from './components/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    QuestionComponent,
    SectionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CourseService,
    SectionService,
    QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
