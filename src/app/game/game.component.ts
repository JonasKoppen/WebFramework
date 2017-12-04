import { Component } from '@angular/core';
import {GuesGame} from "./GuesTheNumber_Game"
import {GuessResult} from "./GuesTheNumber_Game"
import { document } from 'angular-bootstrap-md/utils/facade/browser';
import { Input } from '@angular/core/src/metadata/directives';

interface IGame{
    id: number;
    guesseN: number;
    result: string;
}

@Component({
selector: 'app-game',
templateUrl: './game.component.html'
}) 
export class GameComponent{
    title = ' to game';
}