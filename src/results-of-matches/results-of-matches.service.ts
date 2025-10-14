import { Injectable } from '@nestjs/common';
import { CreateResultsOfMatchDto } from './dto/create-results-of-match.dto';
import { UpdateResultsOfMatchDto } from './dto/update-results-of-match.dto';

@Injectable()
export class ResultsOfMatchesService {
  create(createResultsOfMatchDto: CreateResultsOfMatchDto) {
    return 'This action adds a new resultsOfMatch';
  }

  findAll() {
    return `This action returns all resultsOfMatches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resultsOfMatch`;
  }

  update(id: number, updateResultsOfMatchDto: UpdateResultsOfMatchDto) {
    return `This action updates a #${id} resultsOfMatch`;
  }

  remove(id: number) {
    return `This action removes a #${id} resultsOfMatch`;
  }
}
