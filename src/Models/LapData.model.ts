import { UtilsService } from "src/app/utils.service";

export class LapData {
    startTime:number;
    endTime:number;

    constructor(
        public util:UtilsService
    ) {}

    findLapTimeDifference():string{
        const timeDiff = this.endTime - this.startTime;
        return this.util.milliSecondsToStandardTimeFormat(timeDiff);
    }
}