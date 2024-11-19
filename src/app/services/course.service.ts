import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { QuestionPaper } from '../models/question-paper.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getQuestionPapersByExam(arg0: number): Observable<QuestionPaper[]>  {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/api/courses'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}`, course);
  }

  getCourseByName(name: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/name/${name}`);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}`);
  }


  getCoursesByType(courseType: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/courseType/${courseType}`);
  }
}
