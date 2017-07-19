/**
 * Created by wuchenghao on 2017/7/19.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'loop-back',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})

export class LoopClickComponent {
  values = '';

  /*用模板变量获得输入*/
  onKey(value: String) {
    this.values = value + ' on keybord';
  }
}
