import { Module } from '@nestjs/common';
import { ResultsOfMatchesService } from './results-of-matches.service';
import { ResultsOfMatchesController } from './results-of-matches.controller';

@Module({
  controllers: [ResultsOfMatchesController],
  providers: [ResultsOfMatchesService],
})
export class ResultsOfMatchesModule {}
