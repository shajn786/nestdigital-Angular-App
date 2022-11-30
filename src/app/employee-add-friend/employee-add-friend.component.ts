import { Component } from '@angular/core';

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

  readFriends = ()=>
  {
    let data :any = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
  }


}
