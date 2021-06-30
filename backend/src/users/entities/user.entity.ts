import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';

import { Garden } from '../../gardens/entities/garden.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  location: string;

  @CreateDateColumn()
  joinDate: Date;

  @CreateDateColumn()
  profilePic: string;

  @OneToMany((type) => Garden, (garden) => garden.user)
  gardens: Garden[];
}
