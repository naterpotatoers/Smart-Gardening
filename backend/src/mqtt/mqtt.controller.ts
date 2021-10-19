import { Controller, Post, Body } from '@nestjs/common';
import { MqttService } from './mqtt.service';
import { CreateMqttDto } from './dto/create-mqtt.dto';

@Controller('mqtt')
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @Post()
  create(@Body() createMqttDto: CreateMqttDto) {
    return this.mqttService.publish(createMqttDto);
  }
}
