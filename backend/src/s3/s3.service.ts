import { Injectable } from '@nestjs/common';
import { CreateS3Dto } from './dto/create-s3.dto';
import { UpdateS3Dto } from './dto/update-s3.dto';

@Injectable()
export class S3Service {
  create(createS3Dto: CreateS3Dto) {
    return 'This action adds a new s3';
  }

  findAll() {
    return `This action returns all s3`;
  }

  findOne(id: number) {
    return `This action returns a #${id} s3`;
  }

  update(id: number, updateS3Dto: UpdateS3Dto) {
    return `This action updates a #${id} s3`;
  }

  remove(id: number) {
    return `This action removes a #${id} s3`;
  }
}
