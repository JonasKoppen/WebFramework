import {random} from "lodash"

export enum GuessResult{
    Unknown = 0,
    Correct,
    Too_High,
    Too_Low
}

export class GuesGame{
    private teRadenGetal : number;
    private aantalPogingen = 0;
    

    constructor (private maximum : number){
        this.teRadenGetal = random(1,this.maximum);
        console.log("Number to be guessed = " + this.teRadenGetal + " Of a maximum of " + this.maximum);
    }

    public raadGetal(getal : number) : GuessResult {
        var out;
        if(getal == this.teRadenGetal){
            out = GuessResult.Correct;
        }
        else if(getal > this.teRadenGetal){
            out = 2;
        }
        else if(getal < this.teRadenGetal){
            out = 3;
        }
        else{
            out = 0;
        }
        this.aantalPogingen++;
        return out;
    }

    public get AantalPogingen() : number{
        return this.aantalPogingen;
    }


}