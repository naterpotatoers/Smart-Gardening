import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Bind,
} from '@nestjs/common';
import { S3Service } from './s3.service';
import { CreateS3Dto } from './dto/create-s3.dto';
import { UpdateS3Dto } from './dto/update-s3.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('s3')
export class S3Controller {
  constructor(private readonly s3Service: S3Service) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @Bind(UploadedFile())
  uploadFile(file) {
    console.log(file);
  }

  // @Post()
  // create(@Body() createS3Dto: CreateS3Dto) {
  //   return this.s3Service.create(createS3Dto);
  // }

  @Get()
  findAll() {
    return this.s3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.s3Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateS3Dto: UpdateS3Dto) {
    return this.s3Service.update(+id, updateS3Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.s3Service.remove(+id);
  }
}
