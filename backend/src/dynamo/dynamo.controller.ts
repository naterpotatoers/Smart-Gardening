import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DynamoService } from './dynamo.service';

@ApiTags('dynamo')
@Controller('dynamo')
export class DynamoController {
  constructor(private readonly dynamoService: DynamoService) {}

  @Get()
  findAll() {
    return this.dynamoService.findAll();
  }

  @Get(':nodeId')
  findOne(@Param('nodeId') nodeId: string) {
    return this.dynamoService.findOne(nodeId);
  }
}
