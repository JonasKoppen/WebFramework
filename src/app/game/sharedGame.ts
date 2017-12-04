import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { GuesGame, GuessResult} from "./GuesTheNumber_Game"
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class GameService{
    count : number = 10;
    game : GuesGame;
    attempts : number = 0;
    show = false;
    numbers : number[];
    mustBeMin : number = 0;
    mustBeMax: number = this.count;
    guessResult : GuessResult = GuessResult.Too_Low;
    max : number = 10;
    guesses : Guess[] = [];

    constructor(){
        this.game = new GuesGame(this.count);
    }

    public doGuesse(value:number) {
        if(value && (this.guessResult != GuessResult.Correct)){
            this.show = true;
            console.log("enter pressed");
            this.guessResult = this.game.raadGetal(value);
            //debugger;
            if (this.guessResult == GuessResult.Too_High) {
                this.mustBeMax = value - 1;
                console.log(`my guess is ${value} and was too high`);
              }
              else if (this.guessResult == GuessResult.Too_Low) {
                this.mustBeMin = value + 1;
                console.log(`my guess is ${value} and was too low`);
              }
              else {
                this.mustBeMin = value;
                this.mustBeMax = value;
                console.log(`my guess is ${value}`);
              }
              this.attempts = this.game.AantalPogingen;

        }
    }

    keyPress(value : number){
        this.doGuesse(value)
    }

    public start(max : number){
        this.max = max;
        this.count = max;
        this.Restart();
    }

    Restart(){
        this.game = new GuesGame(this.count);
        this.attempts = 0;
        this.show = false;
        this.mustBeMin  = 0;
        this.mustBeMax = this.count;
        this.guessResult =  GuessResult.Too_Low;
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