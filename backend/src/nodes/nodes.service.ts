import { Injectable } from '@nestjs/common';
import { CreateNodeDto } from './dto/create-node.dto';
import { UpdateNodeDto } from './dto/update-node.dto';

@Injectable()
export class NodesService {
  create(createNodeDto: CreateNodeDto) {
    return 'This action adds a new node';
  }

  findAll() {
    return `This action returns all nodes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} node`;
  }

  update(id: string, updateNodeDto: UpdateNodeDto) {
    return `This action updates a #${id} node`;
  }

  remove(id: string) {
    return `This action removes a #${id} node`;
  }
}
