import { Component } from '@angular/core';
import { NavbarItem } from './navbar.class';

const navbar: NavbarItem[] = [
	{ label: 'Hero List', type: 'link', url: '/hero'},
	{ label: 'Add Hero', type: 'link', url: '/hero'},
	{ label: 'Hall of Fame', type: 'link', url: '/hero'},
	{ label: 'Legend', type: 'link', url: '/hero'},
];

@Component({
  selector: 'angular-navbar',
  template: `
  	<div class="navbar">
  		<ul *ngFor="let navbar of navbars">
  			<li><a href="{{ navbar.url }}">{{ navbar.label }}</a></li>
  		</ul>
  	</div>
  `,
})

export class NavbarComponent { 
	navbars = navbar;
}