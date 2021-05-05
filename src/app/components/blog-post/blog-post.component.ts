import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from "../../models/blog-post";
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post!: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      if (map.has('id')) {
        const id = map.get('id')!;
        this.blogService.get(id).subscribe(post => this.post = post);
      } else {
        this.router.navigate(['*']);
      }
    })
  }

  formatDate(date: string): string {
    return this.blogService.formatDate(date);
  }

}
