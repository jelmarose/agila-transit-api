import { Controller, Get, Param } from '@nestjs/common';
import { CabinsService } from './cabins.service';
import { ICabin } from './interface/cabin.interface';

@Controller('cabins')
export class CabinsController {
    constructor(
        private cabinsService: CabinsService
    ){}

    // {baseUrl}/cabins/1
    @Get(':id')
    async findCabinById(@Param('id') id: number){
        return this.cabinsService.getCabinById(id);
    }

    // {baseUrl}/cabins
    @Get('')
    async findAllCabins(){
        return this.cabinsService.getAllCabins();
    }
}
