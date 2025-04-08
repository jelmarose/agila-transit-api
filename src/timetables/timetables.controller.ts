import { Controller, Post, Body } from '@nestjs/common';
import { TimetablesService } from './timetables.service';
import { GenerateTimetableDto } from './dto/generateTimetables.dto';
import { ITimetable } from './interface/timetable.interface';

@Controller('timetables')
export class TimetablesController {
    constructor(
        private timetablesService: TimetablesService
    ){}

    // {baseUrl}/timetables
    @Post('')
    async generateTimetable(@Body() generateTimetableDto: GenerateTimetableDto): Promise<ITimetable[]> {
        return this.timetablesService.generateTimetable(generateTimetableDto);
    } 
}
