import { Node } from 'src/nodes/entities/node.entity';
import { Plant } from 'src/plants/entities/plant.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateGardenDto {
  id: string;
  location: string;
  startDate: Date;
  user: User;
  nodes: Node[];
  plants: Plant[];
}
