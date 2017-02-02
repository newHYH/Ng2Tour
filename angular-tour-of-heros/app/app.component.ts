import { Component } from '@angular/core';

import { Hero } from './hero';

const HEROS: Hero[] = [
    {id:11,name:"Mr.one"},
    {id:12,name:"Mr.two"},
    {id:13,name:"Mr.three"},
    {id:14,name:"Mr.four"},
    {id:15,name:"Mr.five"},
    {id:16,name:"Mr.six"},
];

@Component({
  selector: 'my-app',
  template: 
            `<h1>{{title}}</h1>
            <h2>My Heros</h2>
            <ul class="heros">
                <li *ngFor="let hero of heros"
                (click)="onSelect(hero)"
                [class.selected]="hero===selectedHero">
                    <span class="badge">{{hero.id}}</span>{{hero.name}}   
                </li>
            </ul>
            <my-hero-detail [hero]="selectedHero"></my-hero-detail>
            `,
})
export class AppComponent  { 
    title = "Tour of Heros";
    
    heros = HEROS;

    selectedHero : Hero;

    onSelect(hero: Hero):void{
        this.selectedHero = hero;
    }
}
