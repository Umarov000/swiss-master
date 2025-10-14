import { PartialType } from '@nestjs/mapped-types';
import { CreateResultsOfMatchDto } from './create-results-of-match.dto';

export class UpdateResultsOfMatchDto extends PartialType(CreateResultsOfMatchDto) {}
