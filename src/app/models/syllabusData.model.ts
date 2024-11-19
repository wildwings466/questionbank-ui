import { Exam } from './exam.model';
import { Topic } from './topic.model';

export interface SyllabusData {
  content: string;
  exam?: Exam;
  topics?: String[];
}
