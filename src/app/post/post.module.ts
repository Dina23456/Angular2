import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostService} from './service/post.service';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PostComponent, PostsComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [PostService]
})
export class PostModule { }
