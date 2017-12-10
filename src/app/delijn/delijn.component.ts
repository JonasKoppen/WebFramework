import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IVertrekResult, DeLijnService } from '../services/delijn.services';


@Component({
  selector: 'app-delijn',
  templateUrl: './delijn.component.html'
  }) 
  export class DelijnComponent implements OnInit{
      title = 'WeatherComponent';
      vertrekken: IVertrekResult;

      constructor(private _svc : DeLijnService){}

      ngOnInit(){
        this._svc.getVertrekken()
          .subscribe(result => this.vertrekken = result);
      }
  }


/* Oude versie
interface ILijnen{
    bestemming: string;
    lijnNummer: number;
    vertrekTijd: Date;
  }

@Component({
selector: 'app-delijn',
templateUrl: './delijn.component.html'
}) 
export class DelijnComponent{
    title = 'WeatherComponent';
    vertrekken: ILijnen[]= 
    [
      {
        bestemming: "Antwerpen",
        lijnNummer: 322,
        vertrekTijd: new Date(2017,10,16,15,10)
      },
      {
        bestemming: "Schoten",
        lijnNummer: 620,
        vertrekTijd: new Date(2017,10,16,15,10)
      },
      {
        bestemming: "Deurne",
        lijnNummer: 607,
        vertrekTijd: new Date(2020,10,16,15,10)
      }
      
    ];
}
*/