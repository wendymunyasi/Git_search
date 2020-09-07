import { Component, OnInit } from '@angular/core';
import { UserService } from './../user-service/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user: any;
  repos: any;
  username: string;
  company: string;

  constructor(private userService: UserService) {
    this.userService.getProfileInfo().subscribe(user => {
      // console.log(user);
      this.user = user;
    });
    this.userService.getProfileRepos().subscribe(repos => {
      // console.log(repos);
      this.repos = repos;   
    });
  }



  findUser(event) {
    if (event.keyCode === 13) {
      this.userService.updateUser(this.username);
      this.userService.getProfileInfo().subscribe(user => {
        // console.log(user);
        this.user = user;
      });
      this.userService.getProfileRepos().subscribe(repos => {
        // console.log(repos);
        this.repos = repos;
      });
    }

  }

  ngOnInit() {
  }

}
