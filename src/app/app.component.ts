import { Component, ViewChild, ElementRef } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;
  startDate = new Date()

  @ViewChild('cardRef1',{read:ElementRef})
  card1: ElementRef

  @ViewChild('courseImage')
  courseImage: ElementRef

  @ViewChild('container')
  containerDiv: ElementRef

  constructor(){
    console.log('app component form constructor', this.card1)
  }

  ngAfterViewInit(){
    console.log('app component from lifecycle', this.card1)
  }

  onCourseSelected(course:Course){
     console.log('app component clicked for image', this.courseImage)

   }

}
