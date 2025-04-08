import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/createBooking.dto';
import { IBooking } from './interface/booking.interface';

@Injectable()
export class BookingsService {

    bookings: IBooking[] = [];

    getBookingByControlNumber(req: string){
        let res = this.bookings.filter((booking) => booking.controlNumber == req)
        return res;
    }
    
    generateControlNumber(): string{
        var randomstring = require("randomstring");
        let controlNumber = randomstring.generate({ length: 7, charset: "alphanumeric", capitalization: "uppercase" });
        return controlNumber;
    }

    async createBooking(createBookingDto: CreateBookingDto): Promise<IBooking>{
        let controlNumber: string = this.generateControlNumber();
        let booking: IBooking = {
            id: this.bookings.length+1,
            controlNumber: controlNumber,
            profile: createBookingDto.profile,
            totalGuests: createBookingDto.totalGuests,
            timetable: createBookingDto.timetable,
            cabinType: createBookingDto.cabinType,
            totalPrice: (createBookingDto.cabinType.price * createBookingDto.totalGuests) + createBookingDto.timetable.price,
        }
        this.bookings.push(booking);
        return booking;
    }
}
