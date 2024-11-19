import { Question } from './question.model';
import { Topic } from './topic.model';

export interface SubTopic {
  id?: number;
  name: string;
  topic?: Topic;
  questions?: Question[];
}
