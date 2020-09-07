import { Component, OnInit } from '@angular/core';
import { UserService } from './../user-service/user.service';
import { RepoService } from './../repo-service/repo.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user: any;
  repos: any;
  username: string;

  constructor(private userService: UserService, private repoService: RepoService) {
    this.userService.getProfileInfo().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.userService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  findUser() {
    this.userService.updateUser(this.username);
    this.userService.getProfileInfo().subscribe(user => {
      console.log(user);
      this.user = user;
    }); 


    // this.repoService.updateRepo();
    this.repoService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;

    });
  }

  ngOnInit() {
  }

}
