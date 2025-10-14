import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TournamentPlayersService } from './tournament-players.service';
import { CreateTournamentPlayerDto } from './dto/create-tournament-player.dto';
import { UpdateTournamentPlayerDto } from './dto/update-tournament-player.dto';

@Controller('tournament-players')
export class TournamentPlayersController {
  constructor(private readonly tournamentPlayersService: TournamentPlayersService) {}

  @Post()
  create(@Body() createTournamentPlayerDto: CreateTournamentPlayerDto) {
    return this.tournamentPlayersService.create(createTournamentPlayerDto);
  }

  @Get()
  findAll() {
    return this.tournamentPlayersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentPlayersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTournamentPlayerDto: UpdateTournamentPlayerDto) {
    return this.tournamentPlayersService.update(+id, updateTournamentPlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentPlayersService.remove(+id);
  }
}
