import { Component, OnInit } from '@angular/core';
import {AdviceMessage} from "./interfaces/advice.interface";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  adviceMessage: string = '';

  constructor() {}

  ngOnInit(): void {}

  showAdviceMessage(event: AdviceMessage) {
    this.adviceMessage = event.advice;
  }

}
