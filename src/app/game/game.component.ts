import { Component } from '@angular/core';
import {GuesGame} from "./GuesTheNumber_Game"
import {GuessResult} from "./GuesTheNumber_Game"
import { document } from 'angular-bootstrap-md/utils/facade/browser';
import { Input } from '@angular/core/src/metadata/directives';

interface IGame{
    id: number;
    guesseN: number;
    result: string;
}

@Component({
selector: 'app-game',
templateUrl: './game.component.html'
}) 
export class GameComponent{
    title = ' to game';
    max : number = 10;
    game : GuesGame;
    guesses : Guess[] = [];
    show = false;
    
    constructor(){
        this.game = new GuesGame(this.max);
    }

    public doGuesse(value:number) {
        if(value){
            this.show = true;
            console.log("enter pressed");
            let result = this.game.raadGetal(value);
            this.guesses.push(new Guess(this.game.AantalPogingen, value, result));
            //debugger;
        }
    }
}

class Guess{
    constructor(public Attempt:number, public Value:number, public Result:GuessResult){
        //debugger;
        console.log(Attempt);
    }

    get IsTooHigh():boolean{
        return this.Result == GuessResult.Too_High;
    }

    get IsTooLow():boolean{
        return this.Result == GuessResult.Too_Low;
    }

    get IsCorrect():boolean{
        return this.Result == GuessResult.Correct;
    }
}

