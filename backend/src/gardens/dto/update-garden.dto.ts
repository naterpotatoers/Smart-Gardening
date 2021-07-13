import { PartialType } from '@nestjs/swagger';
import { Node } from 'src/nodes/entities/node.entity';
import { Plant } from 'src/plants/entities/plant.entity';
import { CreateGardenDto } from './create-garden.dto';

export class UpdateGardenDto extends PartialType(CreateGardenDto) {
  location: string;
  nodes: Node[];
  plants: Plant[];
}
