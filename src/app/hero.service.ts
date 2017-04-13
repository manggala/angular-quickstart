import { Injectable } from '@angular/core';
import { Hero } from './hero.class';
import { HEROES } from './hero.mock';

@Injectable()
export class HeroService {
	getHeros(): Hero[]{
		return HEROES;
	}
}
