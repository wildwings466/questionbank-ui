import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AboutComponent } from './about/about.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddSyllabusComponent } from './add-syllabus/add-syllabus.component';
import { SyllabusComponent } from './syllabus/syllabus.component';


const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'add-course', component: AddCourseComponent },
  { path: 'add-exam', component: AddExamComponent },
  { path: 'courses/:courseType', component: CourseListComponent },
  { path: 'exams/:courseId', component: ExamListComponent },
  { path: 'add-syllabus', component: AddSyllabusComponent },
  { path: 'syllabus/:examName', component: SyllabusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to /home by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
