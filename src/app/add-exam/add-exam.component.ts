import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../services/exam.service';
import { Exam } from '../models/exam.model';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {
  exam: Exam = {
    description: '',
    name: '',
    year: new Date().getFullYear(),
    active: true,
  };

  courses: Course[] = [];
  selectedCourseId?: number;
  message?: string;

  constructor(private examService: ExamService, private courseService: CourseService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
      this.courseService.getAllCourses().subscribe((data: Course[]) => {
        this.courses = data;
      });
    }

    onSave(): void {
      if (this.exam.name && this.exam.year && this.exam.active !== undefined && this.selectedCourseId) {
        console.log(this.courses)
        console.log("selected course id : " + this.selectedCourseId)
        this.exam.course = this.courses.find(course => course.id == this.selectedCourseId);
        console.log(this.exam)
        this.examService.addExam(this.exam).subscribe(data => {
          this.router.navigate(['/add-exam']);
          this.message = "Exam created successfully: " + data
        });
      }
    }
  
    onComplete(): void {
      if (this.exam.name && this.exam.year && this.exam.active !== undefined && this.selectedCourseId) {
        this.exam.course = this.courses.find(course => course.id === this.selectedCourseId);
        this.examService.addExam(this.exam).subscribe(() => {
          this.router.navigate(['/exams']);
        });
      }
    }
}
