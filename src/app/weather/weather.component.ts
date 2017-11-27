import { Component } from '@angular/core';

interface IWeather{
    location: string;
    description: string;
    temperature: number;
    sunrise: Date;
    sunset: Date;
  }

@Component({
selector: 'app-weather',
templateUrl: './weather.component.html'
}) 
export class WeatherComponent{
    title = 'WeatherComponent';
    data: IWeather= {
        "location": "Antwerpen",
        "description": "zonnig",
        "temperature": 23.5,
        "sunrise": new Date(2017,1,1,8,10),
        "sunset": new Date(2017,1,1,21,15),
      }
}