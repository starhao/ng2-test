import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]
})

export class HeroComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  /*不需要明确定义属性的类型,TypeScript能从HEROS数组中推断出来*/
  heroes: Hero[];
  title = 'Tour of Heroes';

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }


}
