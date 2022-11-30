import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-add-friend',
  templateUrl: './employee-add-friend.component.html',
  styleUrls: ['./employee-add-friend.component.css']
})
export class EmployeeAddFriendComponent {
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  constructor(private api :ApiService)
  {

  }

  readFriends = ()=>
  {
    let data :any = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
    this.api.addFreind(data).subscribe(

      (response: any)=>
      {
        console.log(response)
        if(response.status == "success")
        {
          alert("Added Successfully")
          this.DescribeYourFriend=""
          this.friendName=""
          this.friendNickName=""
          this.name=""
        }
        else {
          alert ("Not Added")
        }
  }
    )
}


}
