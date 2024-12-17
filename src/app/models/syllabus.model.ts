import { Exam } from './exam.model';
import { Subject } from './subject.model';
import { Topic } from './topic.model';

export interface Syllabus {
  id?: number;
  name: string;
  content: string;
  exam?: Exam;
  subjects?: Subject[];
}
