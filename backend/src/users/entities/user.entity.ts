import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';

import { Garden } from '../../gardens/entities/garden.entity';
import { Node } from '../../nodes/entities/node.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @CreateDateColumn()
  joinDate: Date;

  @OneToMany((type) => Garden, (garden) => garden.user)
  gardens: Garden[];

  @OneToMany((type) => Node, (node) => node.user)
  nodes: Node[];
}
