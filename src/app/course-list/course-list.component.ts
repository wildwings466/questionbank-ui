import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  courseType!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseType = params.get('courseType')!;
      this.getCoursesByType(this.courseType);
    });
  }

  getCoursesByType(courseType: string): void {
    this.courseService.getCoursesByType(courseType).subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  navigateToExams(courseId: number | undefined): void {
    if (courseId !== undefined) {
      this.router.navigate(['/exams', courseId]);
    }
  }

}
