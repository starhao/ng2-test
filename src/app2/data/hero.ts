/**
 * Created by wuchenghao on 2017/7/19.
 */
export class Hero {
  constructor(public id: number,
              public name: string,
              public power: string,
              public alterEgo?: string /* ? : 表示可选的 */) {
  }
}
