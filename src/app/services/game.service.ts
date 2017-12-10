import { Injectable } from "@angular/core";
import { GuesGame, GuessResult } from "../game/GuesTheNumber_Game";



@Injectable()
export class GameService{
    game : GuesGame
    max : number = 10;

    get Max(){
        return this.max;
    }
    set Max(value : number){
        this.max = value;
    }

    get AantalPogingen(){
        return this.game.AantalPogingen;
    }

    newGame(){
        this.game = new GuesGame(this.max)
    }

    tryGame(value : number) : GuessResult{
        return this.game.raadGetal(value)
    }




    
}