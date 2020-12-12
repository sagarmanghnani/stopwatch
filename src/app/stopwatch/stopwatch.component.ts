import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  timer:number = 0;
  timerIntervalRef:any;
  constructor(
    public util:UtilsService
  ) { }

  ngOnInit(): void {
  }

  startTimer(){
    this.timerIntervalRef = setInterval(() => {
      this.timer++;
    },1);
  }

  endTimer(){
    clearInterval(this.timerIntervalRef);
  }

  resetTimer(){
    this.timer = 0;
  }

}
