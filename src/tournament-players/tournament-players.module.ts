import { Module } from '@nestjs/common';
import { TournamentPlayersService } from './tournament-players.service';
import { TournamentPlayersController } from './tournament-players.controller';

@Module({
  controllers: [TournamentPlayersController],
  providers: [TournamentPlayersService],
})
export class TournamentPlayersModule {}
