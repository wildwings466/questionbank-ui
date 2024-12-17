import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './services/course.service';
import { CourseListComponent } from './course-list/course-list.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ContentComponent } from './content/content.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AddSyllabusComponent } from './add-syllabus/add-syllabus.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    CourseListComponent,
    ExamListComponent,
    AddCourseComponent,
    ContentComponent,
    AddExamComponent,
    CourseDetailsComponent,
    AddSyllabusComponent,
    SyllabusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
