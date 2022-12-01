import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-viewall-freinds',
  templateUrl: './admin-viewall-freinds.component.html',
  styleUrls: ['./admin-viewall-freinds.component.css']
})
export class AdminViewallFreindsComponent {

  constructor(private api:ApiService)
  {
        api.fetchFriends().subscribe(

          (response)=>
          {
            this.loading=false
            this.data = response
          }

        )
  }

  data:any =[]

  loading:boolean=true
  

}
