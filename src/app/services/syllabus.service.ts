import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Syllabus } from '../models/syllabus.model';
import { SyllabusData } from '../models/syllabusData.model';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  private baseUrl = 'http://localhost:8080/api/syllabi'; // Update with your API endpoint

  constructor(private http: HttpClient) {}

  addSyllabus(syllabus: SyllabusData): Observable<Syllabus> {
    return this.http.post<Syllabus>(`${this.baseUrl}`, syllabus);
  }

  getSyllabusByExamId(examId: number): Observable<Syllabus[]> {
    return this.http.get<Syllabus[]>(`${this.baseUrl}/exam/${examId}`);
  }

  getSyllabusById(id: number): Observable<Syllabus> {
    return this.http.get<Syllabus>(`${this.baseUrl}/${id}`);
  }

  updateSyllabus(id: number, syllabus: Syllabus): Observable<Syllabus> {
    return this.http.put<Syllabus>(`${this.baseUrl}/${id}`, syllabus);
  }

  deleteSyllabus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
