/**
 * Created by wuchenghao on 2017/7/18.
 */
import {Component} from "@angular/core";

@Component({
  selector: 'click-me',
  template: `
    <button (click)="onClickMe()">Click Me</button>
    {{clickMessage}}<br>
    <input (keyup)="onKey($event)"/><p>{{values}}</p>`
})

export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero';
  }

  values = '';

  onKey(event: any) {
    this.values = (<HTMLInputElement>event.target).value;
  }
}
