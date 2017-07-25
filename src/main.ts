import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {App3Module} from './app3/app3.module';  //依赖注入
// import {App2Module} from './app2/app2.module';  //表单
// import {AppModule} from './app/app.module';     //angular基础
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(App3Module);

