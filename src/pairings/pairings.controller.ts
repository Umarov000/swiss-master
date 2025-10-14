import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PairingsService } from './pairings.service';
import { CreatePairingDto } from './dto/create-pairing.dto';
import { UpdatePairingDto } from './dto/update-pairing.dto';

@Controller('pairings')
export class PairingsController {
  constructor(private readonly pairingsService: PairingsService) {}

  @Post()
  create(@Body() createPairingDto: CreatePairingDto) {
    return this.pairingsService.create(createPairingDto);
  }

  @Get()
  findAll() {
    return this.pairingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pairingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePairingDto: UpdatePairingDto) {
    return this.pairingsService.update(+id, updatePairingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pairingsService.remove(+id);
  }
}
