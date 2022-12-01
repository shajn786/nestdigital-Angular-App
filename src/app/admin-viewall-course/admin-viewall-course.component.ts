import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-viewall-course',
  templateUrl: './admin-viewall-course.component.html',
  styleUrls: ['./admin-viewall-course.component.css']
})
export class AdminViewallCourseComponent {

  constructor(private api:ApiService)
  {
         api.fetchCourses().subscribe(
  
          (response)=>
          {
            this.loading=false
            console.log(response)
             this.data =response
          }
  
         )
  }

  data:any=[]
  loading :boolean=true
  

}
