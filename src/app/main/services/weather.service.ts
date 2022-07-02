import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherInterface} from "../interfaces/weather.interface";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = 'da81b26da52d498b8a0215625220107';

  constructor(
    private http: HttpClient,
  ) { }

  getWeatherPerm() {
    return this.http.get<WeatherInterface>(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=Perm&lang=ru`);
  }

  getWeatherRostov() {
    return this.http.get<WeatherInterface>(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=Rostov&lang=ru`);
  }

  getWeatherDonetsk() {
    return this.http.get<WeatherInterface>(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=Donetsk&lang=ru`);
  }
}
