import { Course } from './course.model';
import { QuestionPaper } from './question-paper.model';
import { Question } from './question.model';
import { Syllabus } from './syllabus.model';

export interface Exam {
  id?: number;
  description: string;
  name: string;
  year: number;
  active: boolean;
  course?: Course;
  syllabus?: Syllabus;
  questionPapers?: QuestionPaper[];
  questions?: Question[];
  createdBy?: string;
  timeCreated?: Date;
  updatedBy?: string;
  lastUpdatedOn?: Date;
}
