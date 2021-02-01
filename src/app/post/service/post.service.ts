import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../model/post.model';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(`http://jsonplaceholder.typicode.com/posts`);
  }

}
