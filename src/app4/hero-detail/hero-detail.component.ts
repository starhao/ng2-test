import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';
import 'rxjs/add/operator/switchMap';
import {Hero} from '../hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private  location: Location) {}

  ngOnInit() {
    /*从ActivatedRoute服务的可观察对象params中提取id参数*/
    this.route.params.switchMap((params: Params) =>
      this.heroService.getHero(+params['id'])) /*JavaScript 的 (+) 操作符把路由参数的值转成数字*/
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
