import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { IsDate, IsNotEmpty, IsOptional, Length } from 'class-validator';

import { Garden } from '../../gardens/entities/garden.entity';

@Entity()
export class Plant {
  @PrimaryColumn()
  @Length(1, 30)
  @IsNotEmpty()
  id: string;

  @Column()
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @Column()
  @IsDate()
  @IsOptional()
  harvestDate: Date;

  @Column()
  @IsNotEmpty()
  userId: String;
}
