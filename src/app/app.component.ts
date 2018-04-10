import { Component } from '@angular/core';
import {Hero} from './hero';


const HEROES: Hero[] = [
  { id: 11, name:'MR.nice'},
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
    <h1>{{ title }}</h1>  
    <h2>my heroes</h2>
    <ul class = "heroes">
      <li *ngFor = "let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)" >
        <span class="badge">{{ hero.id }} </span>{{ hero.name }}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
   `,
   styles:[`
    .selected{
      background-color: #cfd8dc !important;
      color: white;
    }
    .heroes{
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li{
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #eee;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #bbd8dc !important;
      color: white;
    }
    .heroes li:hover{
      color: #607d8b;
      background-color: #ddd;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      position: relative;
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
   `]

})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  // hero : Hero = {
  //   id: 1,
  //   name: 'windstorm'
  // };
  selectedHero : Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
