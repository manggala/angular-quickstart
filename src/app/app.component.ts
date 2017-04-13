import { Component } from '@angular/core';
import { Hero } from './app/hero.class';
const HEROES: Hero[] = [{
		id: 1,
		name: 'WindStorm'
	},{
		id: 2,
		name: 'Magma'
	},{
		id: 3,
		name: 'ElectricMan'
	},{
		id: 4,
		name: 'SharkMaster'
	},{
		id: 5,
		name: 'FireHead'
	},
];
@Component({
  selector: 'my-app',
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
  			<h2>Detail of {{ hero.name }}</h2>
		  	<div>
		  		<label>id: </label> {{ hero.id }}
		  	</div>
  			<label>name: </label> 
  			<input [(ngModel)]="hero.name" placeholder="name">
  		</div>
  	</div>
  `,
})
export class AppComponent  {
	title = 'Tour of Heroes';
	heroes = HEROES;
	hero: Hero{
		id: 1,
		name: 'WindStorm'
	}
	onSelect(hero: Hero): void{
		this.hero = hero;
	}
}