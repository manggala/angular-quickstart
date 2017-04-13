import { Component } from '@angular/core';
import { Hero } from './hero.class';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-app',
  providers: [HeroService],
  template: `
  	<angular-navbar></angular-navbar>
  	<h1>This is {{ title }}</h1>
  	<div>
  		<div class="width-half">
  			<ul class="hero-list">
		   		<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
		   			{{ hero.name }}
		   		</li>
		   	</ul>
  		</div>
  		<div class="width-half">
  			<hero-detail [hero]="hero">
  			</hero-detail>
  		</div>
  	</div>
  `,
})
export class AppComponent  {
	title = 'Tour of Heroes';
	hero = new Hero();
	heroes: Hero[];
	constructor(private heroService: HeroService){ }
	initHeroes(): void{
		this.heroes = this.heroService.getHeros();
	}
	ngOnInit(): void{
		this.initHeroes();
	}
	onSelect(hero: Hero): void{
		this.hero = hero;
	}
}