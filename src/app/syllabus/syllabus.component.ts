import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from '../models/exam.model';
import { Syllabus } from '../models/syllabus.model';
import { ExamService } from '../services/exam.service';
import { SyllabusService } from '../services/syllabus.service';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {

  syllabus: Syllabus | undefined;
  examName!: string;

  constructor(private route: ActivatedRoute, private syllabusService: SyllabusService, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.examName= params.get('examName')!;
      console.log("loading Syllabus for exam: ", this.examName)
      this.getSyllabusByExam(this.examName);
    });
  }

  getSyllabusByExam(examName: string): void {
    this.syllabusService.getSyllabusByExamName(examName).subscribe((data: Syllabus) => {
      this.syllabus = data;
      console.log(this.syllabus);
    });
  }
}
