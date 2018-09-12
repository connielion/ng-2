import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  repos: any;

  constructor(private github: GithubService) { }

  getAllRepos() {
    return this.github.getAllRepos().subscribe(
      res => { this.repos = res; }
    );
  }

  showDescription(desc) {
    if (desc === null) {
      return 'There was no description provided';
    } else {
      return desc;
    }
  }

  ngOnInit() {
    this.getAllRepos();
  }

}
