import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';




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
    providers:[HeroService]
})
export class AppComponent implements OnInit { 
    title = "Tour of Heros";
    
    heros:Hero[];

    selectedHero : Hero;
    
    constructor(private heroService:HeroService){}

    //getHeroes():void {
    //    this.heroService.getHeroes().then(heros => this.heros = heros);
    //}
    getHeroesSlowly():void{
        this.heroService.getHeroesSlowly().then(heros => this.heros = heros);
    }
    ngOnInit():void{
        //this.getHeroes();
        this.getHeroesSlowly();
    }

    onSelect(hero: Hero):void{
        this.selectedHero = hero;
    }

}
