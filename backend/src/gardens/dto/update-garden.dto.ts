import { PartialType } from '@nestjs/swagger';
import { CreateGardenDto } from './create-garden.dto';

export class UpdateGardenDto extends PartialType(CreateGardenDto) {}
