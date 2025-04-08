import { ITerminal } from "src/terminals/interface/terminal.interface";

export class GenerateTimetableDto{
    departureDate: string;
    noOfGuests: number;
    originTerminal: ITerminal;
    destinationTerminal: ITerminal;
}