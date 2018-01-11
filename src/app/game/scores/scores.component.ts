import { Component, OnInit } from '@angular/core';
import { GameService, IGameScores } from '../../services/game.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  scores: IGameScores[];
  constructor(private svc: GameService) { }

  ngOnInit() {
    setInterval(this.UpdateScores, 2000);
  }

  UpdateScores = () =>
  {
    this.svc.GetScores().subscribe(scores => this.scores = scores);
  }
}
