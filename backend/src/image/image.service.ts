import { Injectable, NotFoundException } from '@nestjs/common';
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

  findAll() {
    return this.repository.find();
  }

  async findOne(id: string) {
    const s3 = new S3();
    const fileInfo = await this.repository.findOne(id);
    if (fileInfo) {
      const stream = await s3
        .getObject({
          Bucket: process.env.AWS_S3_BUCKET,
          Key: fileInfo.key,
        })
        .createReadStream();
      return {
        stream,
        info: fileInfo,
      };
    }
    throw new NotFoundException();
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
