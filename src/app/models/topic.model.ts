import { Subject } from './subject.model';
import { SubTopic } from './subtopic.model';

export interface Topic {
  id?: number;
  name: string;
  subjects?: Subject[];
  subtopics?: SubTopic[];
}
