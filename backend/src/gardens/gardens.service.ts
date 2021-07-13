import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGardenDto } from './dto/create-garden.dto';
import { UpdateGardenDto } from './dto/update-garden.dto';
import { Garden } from './entities/garden.entity';

@Injectable()
export class GardensService {
  constructor(
    @InjectRepository(Garden)
    private gardenRepository: Repository<Garden>,
  ) {}

  create(dto: CreateGardenDto) {
    const garden = new Garden();
    garden.id = dto.id;
    garden.location = dto.location;
    garden.startDate = dto.startDate;
    garden.user = dto.user;
    garden.nodes = dto.nodes;
    garden.plants = dto.plants;
    return this.gardenRepository.save(garden);
  }

  findAll() {
    return this.gardenRepository.find();
  }

  findOne(id: string) {
    return this.gardenRepository.findOne(id);
  }

  async update(id: string, dto: UpdateGardenDto) {
    const garden = await this.findOne(id);
    garden.location = dto.location;
    garden.nodes = dto.nodes;
    garden.plants = dto.plants;
    return await this.gardenRepository.update(id, garden);
  }

  async remove(id: string) {
    return await this.gardenRepository.delete(id);
  }
}
