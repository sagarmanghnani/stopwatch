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

    return `${minute}:${seconds}:${milliseconds}`;

  }

  timeLevelConversion(timeDiffInLowerLevel, conversionRate){
    const upperLevel = Math.floor(timeDiffInLowerLevel / conversionRate);
    const lowerLevel = timeDiffInLowerLevel % conversionRate;
    return {
      upperLevel,
      lowerLevel
    }  
  }
}
