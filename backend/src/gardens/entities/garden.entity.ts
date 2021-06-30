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
import { Plant } from 'src/plants/entities/plant.entity';

@Entity()
export class Garden {
  @PrimaryColumn()
  id: string;

  @Column()
  location: string;

  @CreateDateColumn()
  startDate: Date;

  @ManyToOne(() => User, (user) => user.gardens)
  user: User;

  @OneToMany((type) => Node, (node) => node.garden)
  nodes: Node[];

  @OneToMany((type) => Plant, (plant) => plant.garden)
  plants: Plant[];
}
