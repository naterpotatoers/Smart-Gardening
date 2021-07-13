import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';
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
  @Length(3, 30)
  @IsNotEmpty()
  id: string;

  @Column()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @Length(1, 50)
  @IsNotEmpty()
  location: string;

  @CreateDateColumn()
  @IsDate()
  @IsNotEmpty()
  joinDate: Date;

  @Column()
  @IsOptional()
  profilePic: string;

  @OneToMany((type) => Garden, (garden) => garden.user)
  gardens: Garden[];
}
