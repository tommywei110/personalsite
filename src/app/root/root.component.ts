import { Component, OnInit } from '@angular/core';
import { BlogIndexComponent } from '../blog-index/blog-index.component';
import { BlogService } from '../blog.service';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: [
    './root.component.css',
  ]
})
export class RootComponent implements OnInit {

  assetRoot: string = '../../assets';
  latestPost: BlogPost;

  constructor(private blogService: BlogService) { 
    this.latestPost = this.blogService.getLatestPost();
  }

  ngOnInit(): void {
  }

}
