import { Component, OnInit } from '@angular/core';
//引入hero.ts类
import {Hero} from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // /* 把组件 hero 属性的类型重构为 Hero 。并初始化。*/
  // hero : Hero ={
  //   id:1,
  //   name:'windstorm'
  // };
  heroes : Hero[];

  selectedHero:Hero;
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}


/*
从 Angular 核心库中导入 Component 符号，并为组件类加上 @Component 装饰器
@Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。

CLI 自动生成了三个元数据属性：
  1,selector— 组件的选择器（CSS 元素选择器）
  2,templateUrl— 组件模板文件的位置。
  3,styleUrls— 组件私有 CSS 样式表文件的位置。
CSS 元素选择器 app-heroes 用来在父组件的模板中匹配 HTML 元素的名称，以识别出该组件。
ngOnInit 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方。

始终要 export 这个组件类，以便在其它地方（比如 AppModule）导入它。
*/