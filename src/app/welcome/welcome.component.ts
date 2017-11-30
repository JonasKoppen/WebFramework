import { Component } from '@angular/core';


@Component({
selector: 'app-welcome',
templateUrl: './welcome.component.html',
}) 
export class WelcomeComponent{
    imageUrl;
    title = 'WelcomeComponent';
    images : Image[];
    constructor(){
        this.buildPictureList();
        this.imageUrl = 'img%20(1).jpg';
        this.imageUrl = 'img%20(' + (Math.round(Math.random()*152)) + ').jpg'
    }

    update(){
        this.imageUrl = 'img%20(' + (Math.round(Math.random()*152)) + ').jpg'
    }

    newPicture(event: KeyboardEvent) : void {
        if(event.keyCode == 69){
            this.update();
        }
    }

    buildPictureList(){
        this.images = new Array(152);
        for(let i = 1; i < 152; i++){
            this.images[i-1] = new Image(i-1, "img%20("+i+").jpg", "image " + i);
        }
    }
}

export class Image{
    constructor(public ID : number, public Link : string, public  Name : string){
    }
}