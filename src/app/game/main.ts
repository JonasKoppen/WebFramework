import {GuesGame} from "./GuesTheNumber_Game"
import {GuessResult} from "./GuesTheNumber_Game"
import {random} from "lodash"

var max = 100;
var min = 1;
var guesse : number;
var guesseResult :GuessResult;
var game = new GuesGame(max);

guesse = random(min,max);
guesseResult = game.raadGetal(guesse)
while(guesseResult != GuessResult.Correct){
    let guesseStr;
    if(guesseResult == GuessResult.Too_Low){
        min = guesse +1;
        guesseStr = "too low"
    }
    else if(guesseResult == GuessResult.Too_High){
        max = guesse-1;
        guesseStr = "too high"
    }
    console.log("my guess is ${guesse} and it was ${guesseStr}");
    guesse = random(min,max);
    guesseResult = game.raadGetal(guesse)
}
console.log("My guess is " + guesse);
console.log("Number has been guessed!");
console.log("Game has been finished in " + game.AantalPogingen + " guesses.")

