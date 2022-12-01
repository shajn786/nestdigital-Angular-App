import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  firstname=""
  secondname=""
  email=""
  description=""

  readValues=()=>
  {
    let data:any ={"firstname":this.firstname,"secondname":this.secondname,"email":this.email,"description":this.description}
    console.log(data)
  }


}
