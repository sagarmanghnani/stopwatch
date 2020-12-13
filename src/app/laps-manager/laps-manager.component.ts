import { Component, OnInit } from '@angular/core';
import { start } from 'repl';
import { LapData } from 'src/Models/LapData.model';
import { LapComponent } from '../lap/lap.component';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-laps-manager',
  templateUrl: './laps-manager.component.html',
  styleUrls: ['./laps-manager.component.scss']
})
export class LapsManagerComponent implements OnInit {

  lapsList:LapData[] = [];

  constructor(
    public util:UtilsService
  ) { }

  ngOnInit(): void {
  }

  createLap(startTime, endTime){
    startTime = startTime ?? 0;
    endTime = endTime ?? 0;
    const lap = new LapData(this.util);
    lap.assignStartTimeEndTime(startTime, endTime);
    this.lapsList.push(lap);
  }

}
