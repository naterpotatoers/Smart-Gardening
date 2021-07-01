import { Injectable } from '@nestjs/common';
import { CreateGardenDto } from './dto/create-garden.dto';
import { UpdateGardenDto } from './dto/update-garden.dto';

@Injectable()
export class GardensService {
  create(createGardenDto: CreateGardenDto) {
    return 'This action adds a new garden';
  }

  findAll() {
    return `This action returns all gardens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} garden`;
  }

  update(id: number, updateGardenDto: UpdateGardenDto) {
    return `This action updates a #${id} garden`;
  }

  remove(id: number) {
    return `This action removes a #${id} garden`;
  }
}
