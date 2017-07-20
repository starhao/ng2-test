import {Component, OnInit} from '@angular/core';
import {Hero} from '../data/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  powers = ['大力士', '千里眼', '顺风耳', '火性', '水性', '隐身', '飞天'];

  model = new Hero(18, '大娃', this.powers[0], '力大无穷');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  constructor() {
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  ngOnInit() {
  }

}
