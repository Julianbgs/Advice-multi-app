import { Component, OnInit } from '@angular/core';
import {AdviceMessage} from "./interfaces/advice.interface";
import {WeatherService} from "./services/weather.service";
import {WeatherInterface} from "./interfaces/weather.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  adviceMessage: string = '';
  weatherResult: WeatherInterface[] = [{current: {condition: {icon: '', text: ''}, temp_c: 0}, location: {country: '', name: ''}}];

  constructor(
    private weatherService: WeatherService,
  ) {}

  ngOnInit(): void {
    this.showPermWeather();
    this.showRostovWeather();
    this.showDonetskWeather();
    console.log(this.weatherResult)
  }

  showAdviceMessage(event: AdviceMessage) {
    this.adviceMessage = event.advice;
  }

  showPermWeather() {
    this.weatherService.getWeatherPerm().subscribe(result => {
      this.weatherResult.push(result);
    })
  }

  showRostovWeather() {
    this.weatherService.getWeatherRostov().subscribe(result => {
      this.weatherResult.push(result);
    })
  }

  showDonetskWeather() {
    this.weatherService.getWeatherDonetsk().subscribe(result => {
      this.weatherResult.push(result);
    })
  }

}
