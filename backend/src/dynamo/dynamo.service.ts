import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Dynamo, DynamoKey } from './dynamo.interface';

@Injectable()
export class DynamoService {
  constructor(
    @InjectModel('smart-gardening-v1')
    private userModel: Model<Dynamo, DynamoKey>,
  ) {}

  findOne(key: DynamoKey) {
    return this.userModel.get(key);
  }

  findAll() {
    return this.userModel.scan().exec();
  }
}
