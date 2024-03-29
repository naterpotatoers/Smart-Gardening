import { PartialType } from '@nestjs/swagger';
import { CreateNodeDto } from './create-node.dto';

export class UpdateNodeDto extends PartialType(CreateNodeDto) {
  id: string;
  description: string;
  sensors: string;
  userId: string;
  gardenId: string;
}
