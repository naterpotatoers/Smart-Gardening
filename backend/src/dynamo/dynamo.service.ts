import { Injectable } from '@nestjs/common';
// import { SortOrder } from 'dynamoose/dist/General';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Dynamo, DynamoKey } from './dynamo.interface';

@Injectable()
export class DynamoService {
  constructor(
    @InjectModel('smart-gardening-v2')
    private dynamoModel: Model<Dynamo, DynamoKey>,
  ) {}

  findOne(nodeId: string) {
    return this.dynamoModel.scan().where('nodeId').contains(nodeId).exec();
  }

  findAll() {
    return this.dynamoModel.scan().exec();
    // return this.dynamoModel
    //   .query('timestamp')
    //   .sort(SortOrder.descending)
    //   .exec();
  }
}
