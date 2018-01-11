import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { GuessResult, GuessTheNumber } from "../common/GuessTheNumber";
import { ActivatedRoute } from "@angular/router";
import { GameService, IGameScores } from "../../services/game.service";


@Component({
    selector: 'app-game-input',
    templateUrl: './game-input.component.html',
    styleUrls: ['./game-input.component.scss']
  })
  export class GameInputComponent {
  
    count: number = 10;
    game: GuessTheNumber = new GuessTheNumber(10);
    guesses: Guess[] = [];
    Saved = false;
    constructor(private route: ActivatedRoute, private svc: GameService) {
      let max = this.route.snapshot.params['id']
      if (max != undefined)
        this.count = Number(max);
      this.game = new GuessTheNumber(this.count);
    }
  
    AddGuess(value: number) {
      if (value) {
        let result = this.game.DoGuess(value);
        this.guesses.push(new Guess(this.game.Attempts, value, result));
        if (result == GuessResult.Correct) {
          let score: IGameScores =
            {
              date: new Date(),
              attempts: this.game.Attempts,
              value: value,
              guesses: this.guesses,
              relDate: ""
            }
            
          this.svc.SaveScore(score).subscribe(d => { this.ShowSavedMessage() });
        }
      }
    }
  
    ShowSavedMessage = () => 
    {
      this.Saved = true; 
      setTimeout(this.HideSavedMessage, 2000)
    }
  
    HideSavedMessage = () =>
    {
      this.Saved = false;
    } 
  }
  
  export class Guess {
    constructor(public Attempt: number, public Value: number, public Result: GuessResult) {
    }
  
    get IsTooHigh(): boolean {
      return this.Result == GuessResult.TooHigh;
    }
  
    get IsTooLow(): boolean {
      return this.Result == GuessResult.TooLow;
    }
  
    get IsCorrect(): boolean {
      return this.Result == GuessResult.Correct;
    }
  }
  
  