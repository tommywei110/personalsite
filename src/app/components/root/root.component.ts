import { Component, OnInit } from '@angular/core';
import { BlogIndexComponent } from '../blog-index/blog-index.component';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: [
    './root.component.css',
  ]
})
export class RootComponent implements OnInit {

  assetRoot: string = '../../assets';
  latestPost!: BlogPost;

  constructor(private blogService: BlogService) { 
  }

  ngOnInit(): void {
    this.blogService.getLatest().subscribe(post => {
      this.latestPost = post;
    })
  }

  truncatedPost(): string {
    return this.blogService.truncateBody(this.latestPost, 10);
  }

  formatDate(date: string): string {
    return this.blogService.formatDate(date);
  }

}
