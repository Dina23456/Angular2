import {Component, OnInit} from '@angular/core';
import {PostModel} from '../../../model/post.model';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostModel[];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }

}

