import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { CabinsModule } from './cabins/cabins.module';
import { TimetablesModule } from './timetables/timetables.module';
import { TerminalsModule } from './terminals/terminals.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [TicketsModule, CabinsModule, TimetablesModule, TerminalsModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
