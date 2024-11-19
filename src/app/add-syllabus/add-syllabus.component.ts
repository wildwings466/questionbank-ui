import { Component, OnInit } from '@angular/core';
import { ExamService } from '../services/exam.service';
import { Router } from '@angular/router';
import { Exam } from '../models/exam.model';
import { SyllabusService } from '../services/syllabus.service';

@Component({
  selector: 'app-add-syllabus',
  templateUrl: './add-syllabus.component.html',
  styleUrls: ['./add-syllabus.component.css']
})
export class AddSyllabusComponent implements OnInit {
  syllabus = {
    content: '',
    examId: null,
    topics: ''
  };
  exams: Exam[] = [];

  constructor(
    private syllabusService: SyllabusService,
    private examService: ExamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getExams();
  }

  getExams(): void {
    this.examService.getAllExams().subscribe((data: Exam[]) => {
      this.exams = data;
    });
  }

  onSubmit(): void {
    const syllabusData = {
      ...this.syllabus,
      topics: this.syllabus.topics.split(',').map(topic => topic.trim())
    };

    this.syllabusService.addSyllabus(syllabusData).subscribe(() => {
      this.router.navigate(['/add-syllabus']);
    });
  }

  onComplete(): void {
    this.onSubmit();
    this.router.navigate(['/course-list']);
  }
}
