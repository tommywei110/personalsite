import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from "../blog-post";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  postId: string = 'test';
  post!: BlogPost;

  constructor( private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      if (map.has('id')) {
        this.postId = map.get('id')!;
      } else {
        this.router.navigate(['*']);
      }
    })
  }

}
