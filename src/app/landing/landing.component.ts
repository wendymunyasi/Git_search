import { Component, OnInit } from '@angular/core';
import { UserService } from './../user-service/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private user: any;

  constructor(private userService: UserService) {
    this.userService.getProfileInfo().subscribe(user => {
      console.log(user);
      this.user = user;

    });
  }

  ngOnInit() {
  }

}
