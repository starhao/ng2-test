import {Component, OnInit} from '@angular/core';
import {BLOGS, BlogData} from "../../data/blog-data";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  blogList: BlogData[];
  selectedBlog: BlogData;

  constructor() {
    this.blogList = BLOGS;
  }

  selectBlog(blog: BlogData) {
    this.selectedBlog = blog;
  }

  ngOnInit() {
  }

}
