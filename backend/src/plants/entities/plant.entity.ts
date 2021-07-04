import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { IsDate, IsNotEmpty, IsOptional, Length } from 'class-validator';

import { Garden } from 'src/gardens/entities/garden.entity';

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

  @ManyToOne((type) => Garden, (garden) => garden.plants)
  garden: Garden;
}
