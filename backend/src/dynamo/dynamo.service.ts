import { Injectable } from '@nestjs/common';
import { isNumber } from 'class-validator';
import { SortOrder } from 'dynamoose/dist/General';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Dynamo, DynamoKey } from './dynamo.interface';
// import {SortOrder} from ''

@Injectable()
export class DynamoService {
  constructor(
    @InjectModel('smart-gardening-v2')
    private dynamoModel: Model<Dynamo, DynamoKey>,
  ) {}

  findOne(nodeId: string) {
    return this.dynamoModel
      .scan()
      .where('nodeId')
      .contains(nodeId)
      .limit(300)
      .exec();
  }

  findAll() {
    return this.dynamoModel.scan().limit(300).exec();
  }
}
