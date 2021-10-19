import { Injectable } from '@nestjs/common';
import { CreateMqttDto } from './dto/create-mqtt.dto';
import { iot } from 'aws-iot-device-sdk-v2';

let client = new iot.AwsIotMqttConnectionConfigBuilder();
@Injectable()
export class MqttService {
  publish(createMqttDto: CreateMqttDto) {
    let exampleJSON = {
      test: 'hello',
    };
    const mqttMessage = JSON.stringify(exampleJSON);
  }
}
