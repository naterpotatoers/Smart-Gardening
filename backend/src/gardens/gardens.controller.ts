import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GardensService } from './gardens.service';
import { CreateGardenDto } from './dto/create-garden.dto';
import { UpdateGardenDto } from './dto/update-garden.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('gardens')
@Controller('gardens')
export class GardensController {
  constructor(private readonly gardensService: GardensService) {}

  @Post()
  create(@Body() createGardenDto: CreateGardenDto) {
    return this.gardensService.create(createGardenDto);
  }

  @Get()
  findAll() {
    return this.gardensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gardensService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGardenDto: UpdateGardenDto) {
    return this.gardensService.update(id, updateGardenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gardensService.remove(id);
  }
}
