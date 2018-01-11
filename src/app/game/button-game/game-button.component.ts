import { Component, OnInit } from "@angular/core";
import { GuessTheNumber, GuessResult } from "../common/GuessTheNumber";
import { ActivatedRoute } from "@angular/router";
import { GameService, IGameScores } from "../../services/game.service";
import * as _ from "lodash"


@Component({
    selector: 'app-game-button',
    templateUrl: './game-button.component.html',
    styleUrls: ['./game-button.component.scss']
})
export class GameButtonComponent
{
    count: number = 10;
    numbers: number[];
    game: GuessTheNumber;
    mustbeMin: number = 0;
    mustbeMax: number = this.count;
    attempts: number;
    guessResult: GuessResult = GuessResult.TooLow;

    constructor(private route: ActivatedRoute, private svc : GameService)
    {
        let max = this.route.snapshot.params['id']
        if(max != undefined)
            this.count = Number(max);
        this.mustbeMax = this.count;
        this.game = new GuessTheNumber(this.count);
        this.numbers = _.range(0, this.count + 1);
    }

    keyPress(guess: number) {
        if (this.guessResult == GuessResult.Correct) return;
    
        this.guessResult = this.game.DoGuess(guess);
        if (this.guessResult == GuessResult.TooHigh) {
          this.mustbeMax = guess - 1;
          console.log(`my guess is ${guess} and was too high`);
        }
        else if (this.guessResult == GuessResult.TooLow) {
          this.mustbeMin = guess + 1;
          console.log(`my guess is ${guess} and was too low`);
        }
        else {
          this.mustbeMin = guess;
          this.mustbeMax = guess;
          console.log(`my guess is ${guess}`);
          let score : IGameScores =
          {
            date: new Date(),
            relDate : "",
            attempts : this.game.Attempts,
            value : guess,
            guesses: null
          }
          this.svc.SaveScore(score).subscribe();
    
        }
        this.attempts = this.game.Attempts;
      }
    
      Restart() {
        this.game = new GuessTheNumber(this.count);
        this.mustbeMin = 0;
        this.mustbeMax = this.count;
        this.attempts = 0;
        this.guessResult = 0;
      }
    
}