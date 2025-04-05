import { Controller, Get, Param, Query, NotFoundException } from '@nestjs/common';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
    constructor(
        private ticketService: TicketsService
    ){}

    // tickets/01
    @Get(':id')
    async findOne(@Param('id') id: string){
        // return this.ticketService.findById(id);
        try{
            return await this.ticketService.findById(id);
        } catch (error) {
            throw new NotFoundException();
        }
    }
    
    // tickets
    @Get()
    async findAll(){
        return this.ticketService.findAll();
        // return `Returning all tickets...`   
    }
    // findAll(@Query() query: string){
    //     return `Returning tickets with the query ${query} idk`
    // }
    
    
}
