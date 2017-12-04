import { Component } from '@angular/core';
import { document } from 'angular-bootstrap-md/utils/facade/browser';
import { Input } from '@angular/core/src/metadata/directives';
import { GuesGame, GuessResult } from '../GuesTheNumber_Game';
import { ActivatedRoute } from '@angular/router';
import * as _ from "lodash"

@Component({
selector: 'app-game-button',
templateUrl: './button-game.component.html',
styleUrls: ['./button-game.component.scss']
}) 
export class ButtonGameComponent{
    title = 'Button Game';
    count : number = 10;
    game : GuesGame;
    attempts : number = 0;
    show = false;
    numbers : number[];
    mustBeMin : number = 0;
    mustBeMax: number = this.count;
    guessResult : GuessResult = GuessResult.Too_Low;
    
    constructor(private route: ActivatedRoute){
        let max = this.route.snapshot.params['id']
        if(max != undefined){
            this.count = Number(max);
        }
        this.mustBeMax = this.count;
        this.game = new GuesGame(this.count);
        this.numbers = _.range(0, this.count+1);
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

    public keyPress(value : number){
        this.doGuesse(value)
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
