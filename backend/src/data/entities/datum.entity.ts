import { IsNotEmpty, Length } from 'class-validator';
import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Datum {
  @PrimaryColumn()
  @IsNotEmpty()
  timeStamp: string;
}
