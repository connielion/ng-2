import { Injectable } from '@angular/core';

import { Comment } from '../classes/comment';
import { Post } from '../classes/post';
import { LocalStorageService } from './local-storage.service';
import { UserService } from './user.service';
import { ApiserviceService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private localStorage: LocalStorageService, private userService: UserService, private apiService: ApiserviceService, private router: Router) { }

  getPosts() {
    return this.apiService.get('/posts');
  }

  getPost(id: string) {
    this.apiService.get(`/post/${id}`);
  }

  makePost(post: Post) {
    return this.apiService.post('/newPost', post).subscribe(
      (res: any) => {
          return;
      },
      err => console.log(`An error occured: ${err}`), () => {
        this.router.navigateByUrl( '/');
      }
    );
    }

  makeComment(comment: Comment, post_id: string, user_id: string) {
    return this.apiService.post(`/newComment/${post_id}`, comment).subscribe(
        () => {
          return;
        }, err => console.log(`An error occured: ${err}`),
        () => this.router.navigateByUrl(`/post/${post_id}`)
    );
  }

}
