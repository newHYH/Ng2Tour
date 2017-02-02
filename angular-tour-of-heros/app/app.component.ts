import { Component } from '@angular/core';

export class Hero {
    id:number;
    name:string;
}
@Component({
  selector: 'my-app',
  template: `<h1>Tour of Heros</h1>`+
//            `<h1>{{title}}</h1>
//            <h2>{{hero.name}} details!</h2>
//            <div>
//                <label>id:</label>{{hero.id}}
//            </div>
//            <div>
//                <label>name:</label>{{hero.name}}<br>
//                <input [(ngModel)] = "hero.name" value = "{{hero.name}}" placeholder = "name...">
//            </div>`+
            `<h2>My Heros</h2>
            <ul class="heros">
                <li *ngFor="let hero of heros">
                    <span class="badge">{{hero.id}}</span>{{hero.name}}   
                </li>
            </ul>
            `,
})
export class AppComponent  { 
    title = "Tour of Heros";
    
    heros = HEROS;

}
const HEROS: Hero[] = [
    {id:11,name:"Mr.one"},
    {id:12,name:"Mr.two"},
    {id:13,name:"Mr.three"},
    {id:14,name:"Mr.four"},
    {id:15,name:"Mr.five"},
    {id:16,name:"Mr.six"},
]