import { Controller, Get, Param, Query, NotFoundException } from '@nestjs/common';
import { TerminalsService } from './terminals.service';

@Controller('terminals')
export class TerminalsController {
    constructor(
        private terminalsService: TerminalsService
    ){}

    // {baseUrl}/terminals/region
    @Get('regions')
    async findAllRegions(){
        return this.terminalsService.getAllRegions();
    }

    // {baseUrl}/terminals/LZN
    @Get(':regionCode')
    async findByRegionCode(@Param('regionCode') regionCode: string ){
        return this.terminalsService.getTerminalsByRegion(regionCode);
    }

    @Get('')
    async findAllTerminals(){
        return this.terminalsService.getAllTerminals();
    }
}
