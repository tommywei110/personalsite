import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blog-post';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.css']
})
export class BlogIndexComponent implements OnInit {
  posts!: Array<BlogPost>;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAll().subscribe(posts => this.posts = posts);
  }

  truncatedBody(post: BlogPost): string {
    return this.blogService.truncateBody(post);
  }

  formatDate(date: string): string {
    return this.blogService.formatDate(date);
  }

}
