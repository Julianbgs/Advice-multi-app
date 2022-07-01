import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AdviceInterface} from "../interfaces/advice.interface";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getRandomAdvice() {
    return this.http.get<AdviceInterface>('https://api.adviceslip.com/advice');
  }
}
