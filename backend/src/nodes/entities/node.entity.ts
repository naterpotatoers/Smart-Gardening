import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

import { Garden } from 'src/gardens/entities/garden.entity';

@Entity()
export class Node {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  startDate: Date;

  @Column()
  description: string;

  @Column()
  sensors: string;

  @ManyToOne((type) => Garden, (garden) => garden.nodes)
  garden: Garden;
}
