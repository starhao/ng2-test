import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App3Component} from './app3.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroListComponent} from './heroes/hero-list.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [App3Component, HeroesComponent, HeroListComponent],
  bootstrap: [App3Component],
})
export class App3Module {
}
