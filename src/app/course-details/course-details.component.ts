import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { QuestionPaper } from '../models/question-paper.model';
import { Exam } from '../models/exam.model';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course | undefined;
  activeExam: Exam | undefined;
  previousExams: Exam[] = [];
  questionPapers: QuestionPaper[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const courseId = +this.route.snapshot.paramMap.get('courseId')!;
    this.getCourseDetails(courseId);
  }

  getCourseDetails(courseId: number): void {
    this.courseService.getCourseById(courseId).subscribe((course: Course) => {
      this.course = course;
    });
  }



  loadQuestionPapers(exams: Exam[]): void {
    exams.forEach(exam => {
      this.courseService.getQuestionPapersByExam(exam.id!).subscribe((papers: QuestionPaper[]) => {
        this.questionPapers.push(...papers);
      });
    });
  }
}
