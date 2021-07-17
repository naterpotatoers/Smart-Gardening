import { Node } from '../../nodes/entities/node.entity';
import { Plant } from '../../plants/entities/plant.entity';
import { User } from '../../users/entities/user.entity';

export class CreateGardenDto {
  id: string;
  location: string;
  startDate: Date;
  user: User;
  nodes: Node[];
  plants: Plant[];
}
