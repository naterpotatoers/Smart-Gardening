import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private repository: Repository<Image>,
  ) {}

  create(dto: CreateImageDto): Promise<Image> {
    const image = new Image();
    image.id = dto.id;
    image.url = dto.url;
    image.key = dto.key;
    return this.repository.save(image);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, dto: UpdateImageDto) {
    const image = await this.findOne(id);
    image.url = dto.url;
    image.key = dto.key;
    return await this.repository.update(id, image);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
