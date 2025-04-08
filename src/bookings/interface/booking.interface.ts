import { ICabin } from "src/cabins/interface/cabin.interface";
import { ITimetable } from "src/timetables/interface/timetable.interface";

export interface IBooking {
    id: number;
    controlNumber: string;
    profile: IGuestInfo;
    totalGuests: number;
    timetable: ITimetable;
    cabinType: ICabin;
    totalPrice: number;
}

export interface IGuestInfo {
    firstName: string;
    lastName: string;
    email: string;
    contactNo: string;
}