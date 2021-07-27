import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { IsDate, IsNotEmpty, IsOptional, Length } from 'class-validator';

@Entity()
export class Dynamo {
  @PrimaryColumn()
  @Length(1, 30)
  @IsNotEmpty()
  timestamp: string;

  @Column()
  data: Object;
}
