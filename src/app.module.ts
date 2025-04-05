import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsController } from './tickets/tickets.controller';
import { TicketsModule } from './tickets/tickets.module';
import { CabinsModule } from './cabins/cabins.module';

@Module({
  imports: [TicketsModule, CabinsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
