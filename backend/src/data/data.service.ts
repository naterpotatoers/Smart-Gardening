import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { Datum } from './entities/datum.entity';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(Datum)
    private datumRepository: Repository<Datum>,
  ) {}

  create(dto: CreateDatumDto) {
    const data = new Datum();
    data.timeStamp = dto.timeStamp;
    return this.datumRepository.save(data);
  }

  findAll() {
    return this.datumRepository.find();
  }

  findOne(id: string) {
    return this.datumRepository.findOne(id);
  }

  async update(id: string, dto: UpdateDatumDto) {
    const data = await this.findOne(id);
    data.timeStamp = dto.timeStamp;
    return await this.datumRepository.update(id, data);
  }

  async remove(id: string) {
    return await this.datumRepository.delete(id);
  }
}
