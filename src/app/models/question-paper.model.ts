import { Exam } from './exam.model';

export interface QuestionPaper {
  id?: number;
  title: string;
  year: number;
  exam?: Exam;
}
