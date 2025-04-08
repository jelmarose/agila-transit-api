import { Controller, Post, Body, Get, Req, Query } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/createBooking.dto';
import { IBooking } from './interface/booking.interface';

@Controller('bookings')
export class BookingsController {
    constructor(
        private bookingsService: BookingsService
    ){}

    // {baseUrl}/bookings
    @Post('')
    async createBooking(@Body() createBookingDto: CreateBookingDto): Promise<IBooking> {
        return this.bookingsService.createBooking(createBookingDto);
    }

    @Get('')
    async getBookingByControlNumber(@Query('controlNumber') req: string): Promise<IBooking[]>{
        return this.bookingsService.getBookingByControlNumber(req);
    }
}
