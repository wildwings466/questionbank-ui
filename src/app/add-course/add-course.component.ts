import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course, CourseType } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course: Course = {
    name: '',
    board: '',
    course_type: CourseType.JOB
  };
  courseTypes = Object.values(CourseType);

  constructor(private courseService: CourseService, private router: Router) { }

  onSave(): void {
    if (this.course.name && this.course.board && this.course.course_type) {
      this.courseService.createCourse(this.course).subscribe(() => {
        this.router.navigate(['/add-course']);
      });
    }
  }

  onComplete(): void {
    if (this.course.name && this.course.board && this.course.course_type) {
      this.courseService.createCourse(this.course).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    }
  }
}
