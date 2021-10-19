import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNodeDto } from './dto/create-node.dto';
import { UpdateNodeDto } from './dto/update-node.dto';
import { Node } from './entities/node.entity';

@Injectable()
export class NodesService {
  constructor(
    @InjectRepository(Node)
    private nodeRepository: Repository<Node>,
  ) {}

  create(dto: CreateNodeDto) {
    const node = new Node();
    node.id = dto.id;
    node.startDate = dto.startDate;
    node.description = dto.description;
    node.sensors = dto.sensors;
    node.userId = dto.userId;
    node.gardenId = dto.gardenId;
    return this.nodeRepository.save(node);
  }

  findAll() {
    return this.nodeRepository.find();
  }

  findOne(id: string) {
    return this.nodeRepository.findOne(id);
  }

  async update(id: string, dto: UpdateNodeDto) {
    const node = await this.findOne(id);
    node.id = dto.id;
    node.description = dto.description;
    node.sensors = dto.sensors;
    node.gardenId = dto.gardenId;
    node.userId = dto.userId;
    return await this.nodeRepository.update(id, node);
  }

  async remove(id: string) {
    return await this.nodeRepository.delete(id);
  }
}
