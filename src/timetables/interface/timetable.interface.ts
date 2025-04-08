import { ITerminal } from "src/terminals/interface/terminal.interface";

export interface ITimetable{
    departureDate: string;
    departureTime: ITime;
    arrivalTime: ITime;
    originTerminal: ITerminal;
    destinationTerminal: ITerminal;
    price: number;
}

export interface ITime{
    hour: number;
    militaryHrFormat: string;
    twelveHrFormat: string;
}