/**
 * Created by wuchenghao on 2017/7/21.
 */
import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-list',
  templateUrl: './heroes.component.html'
})

export class HeroListComponent {
  heroes: Hero[];

  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

}
