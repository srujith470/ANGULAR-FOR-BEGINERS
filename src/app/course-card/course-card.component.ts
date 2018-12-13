import { Component, OnInit, Input } from '@angular/core';
import{COURSES} from '../../db-data'
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }
  @Input() course: Course;
  ngOnInit() {
  }

}
