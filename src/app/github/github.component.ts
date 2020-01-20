import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo-service/repo.service';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user: any;
  repos: any;
  username: string;

  constructor(private userService: UserService, private repoService: RepoService) {

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
