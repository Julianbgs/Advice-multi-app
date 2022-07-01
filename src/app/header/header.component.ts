import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AdviceInterface} from "../main/interfaces/advice.interface";
import {MainService} from "../main/services/main.service";
import {ModalComponent} from "../modal/modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() OnImportAdviceMessage = new EventEmitter();

  advice: AdviceInterface = {slip: {id: 0, advice: ""}};

  constructor(
    private mainService: MainService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.mainService.getRandomAdvice().subscribe(response => {
      this.advice = response;
    });
  }

  onClickToAdviceButton() {
    this.mainService.getRandomAdvice().subscribe(response => {
      this.advice = response;
    });
    //emit advice message to main component
    this.OnImportAdviceMessage.emit({
      advice: this.advice.slip.advice,
    });
    // logic for opening modal
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      data: {advice: this.advice.slip.advice},
    });
    // close modal
    dialogRef.afterClosed().subscribe();
  }
}
