import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
    /*模拟延时*/
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(HEROES), 5000);
    // });
  }
}
