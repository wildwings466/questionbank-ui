import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';
import { Course, CourseType } from '../models/course.model';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
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
        this.router.navigate(['/add-subject']);
      });
    }
  }

  onComplete(): void {
    if (this.course.name && this.course.board && this.course.course_type) {
      this.courseService.createCourse(this.course).subscribe(() => {
        this.router.navigate(['/subjects']);
      });
    }
  }

}
