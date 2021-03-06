import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LapsManagerComponent } from '../laps-manager/laps-manager.component';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  timer:number = 0;
  timerIntervalRef:any;
  isClockRunning:boolean = false;
  lapStartPoint:number = 0;
  showTimer:string;
  @ViewChild('circle2')circle2:ElementRef
  @ViewChild('lapManager')lapManager:LapsManagerComponent
  constructor(
    public util:UtilsService
  ) { }

  ngOnInit(): void {
  }

  startTimer(){
    this.timerIntervalRef = setInterval(() => {
      this.timer += 10;
       const circle2Svg:HTMLElement = this.circle2.nativeElement;
      circle2Svg.style.strokeDashoffset = `${(this.timer % (1000 * 60)) * (11.52 / 1000)}`;
      if(this.util.isInteger(this.util.minutesFromMilliSeconds(this.timer))){
        circle2Svg.style.strokeDashoffset = `0`;
        circle2Svg.style.transition = 'none';
      }
      this.isClockRunning = true;
    },10);
    
  }

  endTimer(){
    clearInterval(this.timerIntervalRef);
    this.isClockRunning = false;
    // this.lapStartPoint = this.timer;
  }

  resetTimer(){
    this.lapStartPoint = 0;
    this.timer = 0;
    const circle2Svg:HTMLElement = this.circle2.nativeElement;
    circle2Svg.style.strokeDashoffset = `0`;
    circle2Svg.style.transition = 'none';
  }

  recordLap(){
    this.lapManager.createLap(this.lapStartPoint, this.timer);
    this.lapStartPoint = this.timer;
  }

  

}
