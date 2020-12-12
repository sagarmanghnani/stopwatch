import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  milliSecondsToStandardTimeFormat(timeDiff:number):string{
    const levelInSeconds = this.timeLevelConversion(timeDiff, 1000); //conversion for milliseconds
    const levelInMinutes = this.timeLevelConversion(levelInSeconds.upperLevel, 60); //conversion for seconds to minutes
    const minute = levelInMinutes.upperLevel;
    const seconds = levelInMinutes.lowerLevel;
    const milliseconds = levelInSeconds.lowerLevel;

    return `${this.showTimeFormat(2, minute)}:${this.showTimeFormat(2, seconds)}:${this.showTimeFormat(3, milliseconds)}`;

  }

  timeLevelConversion(timeDiffInLowerLevel, conversionRate){
    const upperLevel = Math.floor(timeDiffInLowerLevel / conversionRate);
    const lowerLevel = timeDiffInLowerLevel % conversionRate;
    return {
      upperLevel,
      lowerLevel
    }  
  }

  showTimeFormat(lengthOfTime:number, time:number):string{
    const timeLength = this.countTimeLength(time);
    const lengthDiff = lengthOfTime - timeLength;
    const arrayToAppend = new Array(lengthDiff).fill(0);
    return `${arrayToAppend.join('')}${time}`;
    
  }

  countTimeLength(time:number):number{
    return `${time}`.length
  }
}
