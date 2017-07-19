import {Component} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<!--<h1>{{title}}</h1><h2>My favorite hero is :{{myHero}}</h2>-->`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Tornado'),
    new Hero(4, 'Magneta'),
  ];
  myHero = this.heroes[0];
  number = this.heroes.length;
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(new Hero(this.number + 1, newHero));
      this.number = this.heroes.length;
    }
  }


}
