import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '1e4a0bdb251c64e4';
  url: string;
  queryNotFound: string;

  constructor(private http: HttpClient) {
    // console.log('Hello WeatherProvider Provider');
    // this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/'
  }

  // getWeather(state: string, city: string): Observable<any> {
  //   //return this.http.get(this.url + state + '/' + city + '.json');
  // }
}
