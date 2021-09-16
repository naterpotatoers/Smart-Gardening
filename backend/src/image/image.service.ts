import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
import { v4 as uuid } from 'uuid';
import { S3 } from 'aws-sdk';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private repository: Repository<Image>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async create(dataBuffer: Buffer, filename: string) {
    const s3 = new S3();
    const uploadResult = await s3
      .upload({
        Bucket: process.env.AWS_S3_BUCKET,
        Body: dataBuffer,
        Key: `${uuid()}-${filename}`,
      })
      .promise();

    const newFile = this.repository.create({
      key: uploadResult.Key,
      url: uploadResult.Location,
    });
    await this.repository.save(newFile);
    return newFile;
  }
}
