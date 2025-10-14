import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultsOfMatchesService } from './results-of-matches.service';
import { CreateResultsOfMatchDto } from './dto/create-results-of-match.dto';
import { UpdateResultsOfMatchDto } from './dto/update-results-of-match.dto';

@Controller('results-of-matches')
export class ResultsOfMatchesController {
  constructor(private readonly resultsOfMatchesService: ResultsOfMatchesService) {}

  @Post()
  create(@Body() createResultsOfMatchDto: CreateResultsOfMatchDto) {
    return this.resultsOfMatchesService.create(createResultsOfMatchDto);
  }

  @Get()
  findAll() {
    return this.resultsOfMatchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultsOfMatchesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResultsOfMatchDto: UpdateResultsOfMatchDto) {
    return this.resultsOfMatchesService.update(+id, updateResultsOfMatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultsOfMatchesService.remove(+id);
  }
}
