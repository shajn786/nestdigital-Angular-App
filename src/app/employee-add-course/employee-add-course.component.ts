import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-add-course',
  templateUrl: './employee-add-course.component.html',
  styleUrls: ['./employee-add-course.component.css']
})
export class EmployeeAddCourseComponent {

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  readCourse=()=>
  {
    let data:any= {"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
    console.log(data)
  }

}
