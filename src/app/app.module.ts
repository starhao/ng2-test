import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ArticleComponent} from './article/article.component';
import {ArticleEditComponent} from './article-edit/article-edit.component';

/*NgModule 装饰器,接收一个用来描述模块属性的元数据对象.*/
@NgModule({
  /*declarations 声明本模块中拥有的视图类.每新增一个模块, 都要在这里声明*/
  declarations: [AppComponent,
    ArticleComponent,
    ArticleEditComponent],

  /*declaretions 的子集, 可用于其他模块的组件*/
  exports: [],

  /*本模块需要的其他模块*/
  imports: [BrowserModule],

  providers: [],

  /*指定主模块*/
  bootstrap: [AppComponent]
})

/* AppModule是默认模块,导不导出都一样*/
export class AppModule {
}
