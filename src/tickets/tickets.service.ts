import { Injectable } from '@nestjs/common';
import { Ticket } from './interface/ticket.interface';

@Injectable()
export class TicketsService {
    private readonly tickets : Ticket[] = [
        {
            id: "01",
            name: "Economy",
            price: 100
        },
        {
            id: "02",
            name: "Premium",
            price: 500
        },
        {
            id: "03",
            name: "Deluxe",
            price: 1000
        },
    ]

    findAll(): Ticket[] {
        return this.tickets;
    }

    async findById(id: string) {
        let ticket = this.tickets.find(ticket => ticket.id == id)
        // let ticket = await (new Promise((resolve, reject) => {
        //     return this.tickets.find(ticket => ticket.id == id)
        // }))
        return ticket;
        // if(!ticket){
        //     throw new Error("Ticket not found!")
        // }
        // else{
        //     return ticket;
        // }
    }
}
