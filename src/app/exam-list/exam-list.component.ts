import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../services/exam.service';
import { Exam } from '../models/exam.model';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {
  exams: Exam[] = [];
  courseName!: string
  courseId!: number
  activeExam: Exam | undefined;

  constructor(
    private route: ActivatedRoute,
    private examService: ExamService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = +params.get('courseId')!;
      this.getExamsByCourse(this.courseId);
      
    });
  }

  getExamsByCourse(courseId: number): void {
    this.examService.getExamsByCourse(courseId).subscribe((data: Exam[]) => {
      this.exams = data;
      console.log(this.exams);
      this.setActiveExam();
    });
  }

  setActiveExam(): void {
    console.log("finding active exam!")
    this.activeExam = this.exams.find(exam => {
      console.log(exam.year == 2024);
      return  exam.year == 2024;
  });
}
}
