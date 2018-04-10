import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// 虽然NgModel是一个有效的Angular指令，但它默认情况下却是不可用的。 它属于一个可选模块FormsModule。 我们必须选择使用那个模块。
//FormsModule添加到 @NgModule 元数据的imports数组中，它是当前应用正在使用的外部模块列表。


import { AppComponent } from './app.component';
import {HeroDetailComponent} from './hero-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
