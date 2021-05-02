import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';
import { BlogPostComponent } from './blog-post/blog-post.component';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getLatestPost(): BlogPost {
    const post: BlogPost = {
      id: "123",
      title: "Why Did I Build My Own Blog",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias animi error hic. Quae asperiores provident nam explicabo, quaerat velit.",
      date: "May 1, 2021"
    }
    return post;
  }

  getPostWithId(id: string): BlogPost {
    const post: BlogPost = {
      id: "123",
      title: "Why Did I Build My Own Blog",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias animi error hic. Quae asperiores provident nam explicabo, quaerat velit.",
      date: "May 1, 2021"
    }
    return post;
  }
}
