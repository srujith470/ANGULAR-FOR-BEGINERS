import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import{COURSES} from '../../db-data'
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

@Input() cardIndex: number;

  constructor() { }
@Input() course: Course;

@Output() courseSelected = new EventEmitter<Course>();

  ngOnInit() {
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(){
    console.log('button click from course-card component');

    this.courseSelected.emit(this.course)
  }

  


}
