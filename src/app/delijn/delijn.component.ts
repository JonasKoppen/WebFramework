import { Component } from '@angular/core';

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