import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  timer:number = 0;
  timerIntervalRef:any;
  @ViewChild('circle2')circle2:ElementRef
  constructor(
    public util:UtilsService
  ) { }

  ngOnInit(): void {
  }

  startTimer(){
    this.timerIntervalRef = setInterval(() => {
      this.timer++;
      const circle2Svg:HTMLElement = this.circle2.nativeElement;
      // if(this.timer % 1000 === 0){
      //   const circle2Svg:HTMLElement = this.circle2.nativeElement;
      //   circle2Svg.style.strokeDashoffset = `${(this.timer / 1000) * 11.52}`;
      // }
      circle2Svg.style.strokeDashoffset = `${(this.timer) * (11.52 / 1000)}`;
      if(this.util.isInteger(this.util.minutesFromMilliSeconds(this.timer))){
        circle2Svg.style.strokeDashoffset = `0`;
      }
    },1);
  }

  endTimer(){
    clearInterval(this.timerIntervalRef);
  }

  resetTimer(){
    this.timer = 0;
  }

  

}
