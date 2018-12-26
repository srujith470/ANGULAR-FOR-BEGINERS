import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ContentChild, ElementRef, ContentChildren, AfterViewInit, AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import{COURSES} from '../../db-data'
import {Course} from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit,AfterViewInit,AfterContentInit {
@Input() 
noImageTpl:TemplateRef<any>;

@Input() cardIndex: number;

  constructor() { }
@Input() course: Course;

@Output() courseSelected = new EventEmitter<Course>();

@ContentChildren(CourseImageComponent, {read:ElementRef})
images:QueryList<CourseCardComponent>;  

ngOnInit() {}
ngAfterViewInit(){
}
ngAfterContentInit(){
  console.log(this.images)

}
isImageVisible(){
    return this.course && this.course.iconUrl;
  }

onCourseViewed(){
    console.log('button click from course-card component');

    this.courseSelected.emit(this.course)
  }

  


}
