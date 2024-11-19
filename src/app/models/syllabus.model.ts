import { Exam } from './exam.model';
import { Topic } from './topic.model';

export interface Syllabus {
  id?: number;
  content: string;
  exam?: Exam;
  topics?: Topic[];
}
