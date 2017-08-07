import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App4Component} from './app4.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroComponent} from './hero.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from "./app-routing.module"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [App4Component, HeroDetailComponent, HeroComponent, DashboardComponent],
  bootstrap: [App4Component],
  providers: [HeroService]
})

export class App4Module {
}
