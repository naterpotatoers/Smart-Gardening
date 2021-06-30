import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';

import { Garden } from 'src/gardens/entities/garden.entity';

@Entity()
export class Plant {
  @PrimaryColumn()
  id: string;

  @Column()
  startDate: Date;

  @Column()
  harvestDate: Date;

  @ManyToOne((type) => Garden, (garden) => garden.plants)
  garden: Garden;
}
