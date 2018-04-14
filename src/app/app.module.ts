/*
虽然NgModel是一个有效的Angular指令，但它默认情况下却是不可用的。 它属于一个可选模块FormsModule。 我们必须选择使用那个模块。
FormsModule;添加到 @NgModule 元数据的imports数组中�,
*/

/* 子模块要添加到父模块的NgModule中，子模版才能被调用显示 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';;
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module'
import { MessagesComponent } from './messages/messages.component';
import { AppComponent } from  './app.component';   
import { HeroService } from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HeroService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
