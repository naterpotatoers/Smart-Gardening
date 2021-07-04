import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlantsService } from './plants.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('plants')
@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Post()
  create(@Body() createPlantDto: CreatePlantDto) {
    return this.plantsService.create(createPlantDto);
  }

  @Get()
  findAll() {
    return this.plantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plantsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlantDto: UpdatePlantDto) {
    return this.plantsService.update(id, updatePlantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plantsService.remove(id);
  }
}
