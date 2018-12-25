import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren(CourseCardComponent,{read:ElementRef})
  cards:QueryList<CourseCardComponent>;
  
  courses = COURSES;

  constructor(){
  }
  onCoursesEdited(){
    this.courses.push(
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10

      }
    )
  }
  ngAfterViewInit(){
      console.log(this.cards)
  }

  onCourseSelected(course:Course){

     }

}
