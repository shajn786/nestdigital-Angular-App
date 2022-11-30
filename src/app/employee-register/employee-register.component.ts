import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {

  empid=""
  fname=""
  lname=""
  houseno=""
  housename=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobno=""
  email=""
  parentname=""
  gender=""
  highestdefree=""
  yearofexperience=""
  dateofjoining=""
  username=""
  password=""
  confirmpassword=""

  readEmployee=()=>
  {
        let data:any ={"password":this.password,"confirmpassword":this.confirmpassword}
        console.log(data)
  }



}
