import { Injectable } from '@nestjs/common';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';

@Injectable()
export class PlantsService {
  create(createPlantDto: CreatePlantDto) {
    return 'This action adds a new plant';
  }

  findAll() {
    return `This action returns all plants`;
  }

  findOne(id: string) {
    return `This action returns a #${id} plant`;
  }

  update(id: string, updatePlantDto: UpdatePlantDto) {
    return `This action updates a #${id} plant`;
  }

  remove(id: string) {
    return `This action removes a #${id} plant`;
  }
}
