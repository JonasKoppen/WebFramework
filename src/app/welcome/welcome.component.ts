import { Component } from '@angular/core';


@Component({
selector: 'app-welcome',
templateUrl: './welcome.component.html',
}) 
export class WelcomeComponent{
    imageUrl;
    title = 'WelcomeComponent';
    constructor(){
        this.imageUrl = 'img%20(1).jpg';
        this.imageUrl = 'img%20(' + (Math.round(Math.random()*152)) + ').jpg'
    }

    update(){
        this.imageUrl = 'img%20(' + (Math.round(Math.random()*152)) + ').jpg'
    }
}