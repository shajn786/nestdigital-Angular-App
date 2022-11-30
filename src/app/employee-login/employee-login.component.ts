import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  username=""
  password=""

  constructor(private route : Router)
  {

  }

  empLogin=()=>
  {
       let data:any ={"username":this.username,"password":this.password}
       console.log(data)

       if (this.username== "1122" && this.password =="12345")
       {
            this.route.navigate(['/addcourse'])
            this.username=""
            this.password=""
       }
       else{
        alert("invalid credential")
            this.username=""
            this.password=""

       }

  }

}
