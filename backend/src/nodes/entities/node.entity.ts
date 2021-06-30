import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';

@Entity()
export class Node {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  sensors: string;

  @CreateDateColumn()
  startDate: Date;

  @ManyToOne((type) => User, (user) => user.nodes)
  user: User;
}
