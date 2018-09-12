import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  constructor(private github: GithubService) { }

  getAllRepos() {
    return this.github.getAllRepos().subscribe(
      res => console.log(res)
    );
  }

  ngOnInit() {
    this.getAllRepos();
  }

}
