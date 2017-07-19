/**
 * Created by wuchenghao on 2017/7/19.
 */
import {Component} from "@angular/core";
@Component({
  selector: 'key-up',
  template: `<input #box (keyup.enter)="onEventer(box.value)"
                    (blur)="onEventer(box.value)">
  <p>{{value}}</p>`
})

export class KeyUpcomponent {
  value = '';

  onEventer(value: string) {
    this.value = value;
  }

}
