import { Injectable } from '@nestjs/common';
import { CreatePairingDto } from './dto/create-pairing.dto';
import { UpdatePairingDto } from './dto/update-pairing.dto';

@Injectable()
export class PairingsService {
  create(createPairingDto: CreatePairingDto) {
    return 'This action adds a new pairing';
  }

  findAll() {
    return `This action returns all pairings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pairing`;
  }

  update(id: number, updatePairingDto: UpdatePairingDto) {
    return `This action updates a #${id} pairing`;
  }

  remove(id: number) {
    return `This action removes a #${id} pairing`;
  }
}
