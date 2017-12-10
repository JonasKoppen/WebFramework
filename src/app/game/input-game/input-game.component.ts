import { Component } from '@angular/core';
import { document } from 'angular-bootstrap-md/utils/facade/browser';
import { Input } from '@angular/core/src/metadata/directives';
import { GuesGame, GuessResult } from '../GuesTheNumber_Game';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { GameService } from '../../services/game.service';

@Component({
selector: 'app-game-input',
templateUrl: './input-game.component.html'
}) 
export class InputGameComponent implements OnInit{
        title = ' to game';
        guesses : Guess[] = [];
        show = false;

        constructor(private _svc : GameService){
        }

        ngOnInit() {
        }

        
    
        public doGuesse(value:number) {
            if(value){
                this.show = true;
                console.log("enter pressed");
                let result = this._svc.tryGame(value)
                this.guesses.push(new Guess(this._svc.AantalPogingen, value, result));
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
