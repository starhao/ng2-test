import {Component, OnInit, Input} from '@angular/core';
import {BLOGS, BlogData} from '../../data/blog-data';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  @Input() blog: BlogData;

  ngOnInit() {
  }

}
