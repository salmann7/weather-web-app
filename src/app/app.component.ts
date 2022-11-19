import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cityLabel?: string;
  weatherData ?: any;
  searchCityName : string = 'mumbai';

  constructor( private weatherApi : WeatherService ){}

  ngOnInit(): void {
    this.getWeatherData(this.searchCityName);
  }
  
  onSubmit(){
    this.getWeatherData(this.searchCityName);
  }

  private getWeatherData(cityName : string){
    this.weatherApi.getWeatherData(cityName)
    .subscribe({
      next : (response) => {
        this.weatherData = response;
        this.cityLabel = this.searchCityName;
        this.searchCityName = '';
        console.log(response);
      }
    })
  }
}
