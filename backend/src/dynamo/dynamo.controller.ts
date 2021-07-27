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
import { UserService } from './dynamo.service';

@ApiTags('dynamo')
@Controller('dynamo')
export class DynamoController {
  constructor(private readonly dynamoService: UserService) {}

  @Get()
  findAll() {
    return this.dynamoService.findAll();
  }
}
