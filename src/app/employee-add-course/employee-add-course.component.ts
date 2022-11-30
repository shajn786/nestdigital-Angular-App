import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor (private api : ApiService)
  {

  }

  readCourse=()=>
  {
    let data:any= {"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
    console.log(data)
    this.api.addCourse(data).subscribe(
    
      (response:any)=>
      {
        console.log(response)
        if(response.status == "success")
        {
          alert("Added Successfully")
          this.courseDate=""
          this.courseDescription=""
          this.courseDuration=""
          this.courseTitle=""
          this.courseVenue=""
        }
        else
        {
             alert("Not Added")
        }
      }
  
  
    )



  }

}
