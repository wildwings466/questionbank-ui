import { Exam } from "./exam.model";

export enum CourseType {
    STUDY = 'STUDY',
    JOB = 'JOB'
    // Add other course types here
  }
  
  export interface Course {
    id?: number;
    name: string;
    board: string;
    course_type: CourseType;
    exams?: Exam[];
    createdBy?: string;
    timeCreated?: Date;
    updatedBy?: string;
    lastUpdatedOn?: Date;
  }
  
 
  