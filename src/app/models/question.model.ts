import { Exam } from './exam.model';
import { SubTopic } from './subtopic.model';

export interface Question {
  id?: number;
  subTopic?: SubTopic;
  statement: string;
  answer: string;
  option1: string;
  option2: string;
  option3: string;
  penalty?: number;
  questionPaperCode?: string;
  defaultGrade?: number;
  previousYears?: string[];
  exams?: Exam[];
}