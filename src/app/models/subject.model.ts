import { Topic } from './topic.model';
import { Syllabus } from './syllabus.model';

export interface Subject {
  id?: number;
  name: string;
  topics?: Topic[];
  syllabus?: Syllabus;
}
