import { Component, OnInit } from '@angular/core';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-heroes',
  template: `<h2>HEROES</h2>
  <app-list></app-list>`,
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]   /*HeroService只能在HeroesComponent以及其子组件中使用*/

})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
