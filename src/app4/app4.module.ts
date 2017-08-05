import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App4Component} from './app4.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroComponent} from './hero.component';
import {HeroService} from './hero.service';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [App4Component, HeroDetailComponent, HeroComponent],
  bootstrap: [App4Component],
  providers: [HeroService]
})
export class App4Module {
}
