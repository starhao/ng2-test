import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {App2Component} from './app2.component';
import {HeroComponent} from './hero/hero.component';

@NgModule({
  declarations: [App2Component, HeroComponent],

  imports: [BrowserModule, FormsModule],
  bootstrap: [App2Component]
})

export class App2Module {
}
