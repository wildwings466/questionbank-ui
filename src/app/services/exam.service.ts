import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exam } from '../models/exam.model';
import { Syllabus } from '../models/syllabus.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private apiUrl = 'http://localhost:8080/api/exams'; // Replace with your actual API URL
  constructor(private http: HttpClient) { }

  getAllExams():Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.apiUrl}`);
  }
 
  getExamsByCourse(courseId: number): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.apiUrl}/course/${courseId}`);
  }

  getSyllabusByCourse(courseId: number): Observable<Syllabus> {
    return this.http.get<Syllabus>(`${this.apiUrl}/course/${courseId}`);
  }


  addExam(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(this.apiUrl, exam);
  }
}
