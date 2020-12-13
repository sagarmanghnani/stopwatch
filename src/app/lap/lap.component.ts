import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { LapData } from 'src/Models/LapData.model';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-lap',
  templateUrl: './lap.component.html',
  styleUrls: ['./lap.component.scss']
})
export class LapComponent implements OnInit {
  @Input() lapData:LapData;
  @Input() counter: number;
  constructor(public utilService:UtilsService) { 
    this.lapData = new LapData(utilService);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['lapData'] && changes['lapData'].currentValue){
      this.lapData = changes['lapData'].currentValue;
    }

    if(changes['counter'] && changes['counter'].currentValue){
      this.counter = changes['counter'].currentValue;
    }


  }

  

  showLapTime(){
    const diff = this.lapData.endTime - this.lapData.startTime;
    return this.utilService.milliSecondsToStandardTimeFormat(diff);
  }

}
