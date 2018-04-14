import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messagesService:MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messagesService.add('HeroSerive: fetched heroes')
    return of(HEROES);
  }
}
