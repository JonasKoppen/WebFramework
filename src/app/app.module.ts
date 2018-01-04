import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {DelijnComponent} from './delijn/delijn.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './pageNotFound/PageNotFound.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule} from '@angular/forms'
import { CalcComponent } from './calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { DeLijnService } from './services/delijn.services';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherComponent,
    DelijnComponent,
    WelcomeComponent,
    HomeComponent,
    PageNotFoundComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: "game", component : GameComponent},
      {path: "game/:id", component : GameComponent},
      {path: "home", component : HomeComponent},
      {path: "calc", component : CalcComponent},
      {path: "", redirectTo:"home", pathMatch: 'full'},
      {path: "404", component: PageNotFoundComponent},
      {path: '**', redirectTo: '/404'}
      
    ], {useHash:true}),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    DeLijnService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
