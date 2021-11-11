import { IsDate, IsNotEmpty, Length } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';
import { Node } from '../../nodes/entities/node.entity';
import { Plant } from '../../plants/entities/plant.entity';

@Entity()
export class Garden {
  @PrimaryColumn()
  @Length(3, 30)
  @IsNotEmpty()
  id: string;

  @Column()
  @Length(1, 50)
  @IsNotEmpty()
  location: string;

  @CreateDateColumn()
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @Column()
  @IsNotEmpty()
  userId: string;
}
