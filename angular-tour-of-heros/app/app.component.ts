import { Component } from '@angular/core';

export class Hero {
    id:number;
    name:string;
}

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
            <div *ngIf="selectedHero">
                <h2>{{selectedHero.name}} details</h2>
                <div><label>id:</label>{{selectedHero.id}}</div>
                <div>
                    <label>name:</label>
                    <input [(ngModel)]="selectedHero.name" placeholder="name...">
                </div>
            </div>
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
