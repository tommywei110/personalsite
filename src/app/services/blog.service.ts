import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../models/blog-post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private api_root: string = 'api/blog-posts/'

  constructor(private http: HttpClient) { }

  getLatest(): Observable<BlogPost> {
    return this.http.get<BlogPost>(this.api_root+'/latest');
  }

  get(id: string): Observable<BlogPost>{
    return this.http.get<BlogPost>(this.api_root + '/id/' + id);
  }

  delete(id: string) {

  }

  getAll(): Observable<Array<BlogPost>>{
    return this.http.get<Array<BlogPost>>(this.api_root);
  }

  truncateBody(post: BlogPost, length: Number = 27): string {
    return post.body.split(" ").splice(0, 27).join(" ") + " ... ";
  }

  formatDate(date: string): string {
    const dateObj: Date = new Date(date);
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString(undefined, options);
  }
}
