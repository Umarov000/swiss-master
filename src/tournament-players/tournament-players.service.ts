import { Injectable } from '@nestjs/common';
import { CreateTournamentPlayerDto } from './dto/create-tournament-player.dto';
import { UpdateTournamentPlayerDto } from './dto/update-tournament-player.dto';

@Injectable()
export class TournamentPlayersService {
  create(createTournamentPlayerDto: CreateTournamentPlayerDto) {
    return 'This action adds a new tournamentPlayer';
  }

  findAll() {
    return `This action returns all tournamentPlayers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tournamentPlayer`;
  }

  update(id: number, updateTournamentPlayerDto: UpdateTournamentPlayerDto) {
    return `This action updates a #${id} tournamentPlayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} tournamentPlayer`;
  }
}
