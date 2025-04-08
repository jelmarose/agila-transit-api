import { ITimetable } from "src/timetables/interface/timetable.interface";
import { IGuestInfo } from "../interface/booking.interface";
import { ICabin } from "src/cabins/interface/cabin.interface";

export class CreateBookingDto{
    profile: IGuestInfo;
    totalGuests: number;
    timetable: ITimetable;
    cabinType: ICabin;
}