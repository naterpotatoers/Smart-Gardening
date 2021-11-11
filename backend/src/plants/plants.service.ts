import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { Plant } from './entities/plant.entity';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plant)
    private plantRepository: Repository<Plant>,
  ) {}

  create(dto: CreatePlantDto) {
    const plant = new Plant();
    plant.id = dto.id;
    plant.startDate = dto.startDate;
    plant.harvestDate = dto.harvestDate;
    plant.userId = dto.userId;
    return this.plantRepository.save(plant);
  }

  findAll() {
    return this.plantRepository.find();
  }

  findOne(id: string) {
    return this.plantRepository.findOne(id);
  }

  async update(id: string, dto: UpdatePlantDto) {
    const plant = await this.findOne(id);
    plant.id = dto.id;
    plant.startDate = dto.startDate;
    plant.harvestDate = new Date(dto.harvestDate);
    return await this.plantRepository.update(id, plant);
  }

  async remove(id: string) {
    return await this.plantRepository.delete(id);
  }
}
