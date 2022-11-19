import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  url ?: string;

  getWeatherData( cityName : string){
    this.url = environment.weatherApiURL;
    return this.http.get( this.url , {
      headers : new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName , environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName , environment.XRapidAPIKeyHeaderValue),
      params : new HttpParams()
      .set('city', cityName)
    })
  }
}
