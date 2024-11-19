import { Component, OnInit } from '@angular/core';
import { Course, CourseType } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  newCourse: Course = { name: '', board: '', course_type: CourseType.STUDY }; // Initialize with default values
  courseTypes = Object.values(CourseType); 

  constructor(private courseService: CourseService, private router: Router,) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.courseService.getAllCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  navigateToExams(courseId: number | undefined): void {
    if (courseId !== undefined) {
      this.router.navigate(['/exams', courseId]);
    }
  }
}
