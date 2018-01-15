import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import * as moment from "moment";
import { Guess } from "../game/input-game/game-input.component";


@Injectable()
export class GameService 
{
    constructor(private _client : HttpClient){}

    GetScores() : Observable<IGameScores[]>
    {
        return this._client.get<IGameScores[]>("http://127.0.0.1:3005/api/game")
          .map(scores => {scores.forEach(s => s.relDate = moment(s.date).fromNow()); return scores});
    }

    SaveScore(score : IGameScores) : Observable<IGameScores>
    {
        return this._client.post<IGameScores>("http://127.0.0.1:3005/api/game", score);
    }
}

export interface IGameScores
{
    date : Date;
    relDate : string;
    attempts : number;
    value : number;
    guesses : Guess[];
}