import {
  IsDate,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

import { Garden } from '../../gardens/entities/garden.entity';

@Entity()
export class Node {
  @PrimaryColumn()
  @Length(5, 30)
  @IsNotEmpty()
  id: string;

  @CreateDateColumn()
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @Column()
  @Length(1, 150)
  @IsOptional()
  description: string;

  @Column()
  @IsJSON()
  @IsOptional()
  sensors: string;

  @Column()
  @IsNotEmpty()
  userId: string;

  @Column()
  @IsOptional()
  gardenId: string;
}
