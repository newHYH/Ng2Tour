import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'my-app',
    template:`
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/heroes" routerLinkActive="active">全部英雄列表</a>
            <a routerLink="/dashboard" routerLinkActive="active">英雄Top4</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls:['app.component.css']

})
export class AppComponent{
    title = "Angular2练习";
}