import { Injectable } from '@nestjs/common';
import { DEPARTURE_TIMES, TIMETABLE } from './constant/timetable';
import { ITime, ITimetable } from './interface/timetable.interface';
import { GenerateTimetableDto } from './dto/generateTimetables.dto';

@Injectable()
export class TimetablesService {
    private _departureTimes = DEPARTURE_TIMES;
    private _timetable = TIMETABLE;

    distance: number = 0;
    travelTimeInHrs: number = 0;
    basePerHourPrice: number = 100;

    generatedTimetable: ITimetable[] = [];

    calculateDistanceAndTravelTimeInHrs(destinationTerminalId: number, originTerminalId: number){
        this.distance = Math.abs(destinationTerminalId - originTerminalId);
        if(this.distance < 3){
            this.travelTimeInHrs = 1 // default to 1 hr for simplicity
        }
        else if(this.distance < 6){
            this.travelTimeInHrs = 2
        }
        else{
            this.travelTimeInHrs = 3
        }
    }

    async generateTimetable(body: GenerateTimetableDto): Promise<ITimetable[]> {
        // calculate distance and travelTimeInHrs
        this.calculateDistanceAndTravelTimeInHrs(body.destinationTerminal.id, body.originTerminal.id);

        const testPromise = new Promise((res, rej) => {
            let testTable: ITimetable[] = [];
            for(let departureTime of this._departureTimes){
                let timeIndex = this._timetable.findIndex((time: ITime) => time.hour == departureTime.hour);
                let timetable: ITimetable = {
                    departureDate: body.departureDate,
                    departureTime: departureTime,
                    arrivalTime: this._timetable[timeIndex+this.travelTimeInHrs],
                    originTerminal: body.originTerminal,
                    destinationTerminal: body.destinationTerminal,
                    price: this.basePerHourPrice*this.travelTimeInHrs
                }
                testTable.push(timetable);
            }
            res(testTable);
        });

        return await testPromise.then((val: ITimetable[]) => val);
    }
}
