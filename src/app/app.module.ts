import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
