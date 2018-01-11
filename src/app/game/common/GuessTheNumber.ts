import * as _ from "lodash"
// ROL VAN HET SPEL

//Bij het aanmaken wordt hieraan doorgegeven 
// wat het Maximum te raden getal is. 
export class GuessTheNumber {
    //te raden getal
    private _number: number;
    private _attempts = 0;

    constructor(public max: number) {
        // • Vervolgens zal deze klasse zelf een 
        // willekeurig getal bepalen.
        // Gebruik de 3rd party module ‘lodash’
        //  hiervoor. 
        this._number = _.random(0, max);
        console.log(`number to be guessed = ${this._number} in a maximum of ${max}`)
        
    }

    // • Je voorziet dan een “methode” om te raden, 
    // deze geeft als resultaat 
    // of de gok “te hoog”, “te laag” of “juist” was. 
    DoGuess(guess: number): GuessResult {
        this._attempts++;
        if (guess > this._number)
            return GuessResult.TooHigh;
        if (guess < this._number)
            return GuessResult.TooLow;

        return GuessResult.Correct;
    }


    // • Ten allen tijde moet het aantal gedane 
    // pogingen kunnen worden 
    // opgevraagd aan deze klasse
    get Attempts()
    {
        return this._attempts;
    }
}

export enum GuessResult
{
    Correct = 1,
    TooHigh = 2,
    TooLow = 3
}