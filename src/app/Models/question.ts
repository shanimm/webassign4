import { Course } from './course';

export class Question {
  id: number;
  questionText: string;
  answers: Answer[];
  ordered: boolean;
  explanation?: string;
  tags: string[];
  courses: Course[];
  published: boolean;
  status: QuestionStatus;
  createdBy?: string;
  createdOn?: Date;
  lastUpdatedBy?: string;
  lastUpdatedOn?: Date;
  approvedBy1?: string;
  approvedOn?: Date;

  constructor() {
    this.id = 0;
    this.answers = [new Answer(), new Answer(), new Answer(), new Answer()];
    this.ordered = false;
    this.tags = [];
    this.courses = [];
    this.published = false;
    this.status = QuestionStatus.SAVED;
  }
}

class Answer {
  id: number;
  answerText: string;
  correct: boolean;
}

export enum QuestionStatus {
  SAVED,
  SUBMITTED,
  APPROVED,
  INACTIVE
}
