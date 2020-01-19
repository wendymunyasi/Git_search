import { Component, OnInit } from '@angular/core';
import { UserService } from './../user-service/user.service';
import { RepoService } from './../repo-service/repo.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private user: any;
  private repos: any;

  constructor(private userService: UserService, private repoService: RepoService) {
    this.userService.getProfileInfo().subscribe(user => {
      console.log(user);
      this.user = user;

    });

    this.repoService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;

    });
  }

  ngOnInit() {
  }

}
