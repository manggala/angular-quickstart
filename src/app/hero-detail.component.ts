import { Component, Input } from "@angular/core";

import { Hero } from "./hero.class";
@Component({
	selector: 'hero-detail',
	template: `
		<h2>Detail of {{ hero.name }}</h2>
	  	<div>
	  		<label>id: </label> {{ hero.id }}
	  	</div>
		<label>name: </label> 
		<input [(ngModel)]="hero.name" placeholder="name">
	`,
})

export class HeroDetailComponent{
	@Input() hero: Hero;
}