import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  password=""

  constructor(private route : Router)
  {

  }

  adminLogin=()=>
  {
       let data:any ={"username":this.username,"password":this.password}
       console.log(data)

       if(this.username == "admin" && this.password == "nestdigital")
       {
          this.route.navigate(['/admincourse'])
       }
       else{
        alert("invalid credential")
        this.username=""
        this.password=""
       }
  }

}
