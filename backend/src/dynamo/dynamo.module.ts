import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { DynamoController } from './dynamo.controller';
import { DynamoSchema } from './dynamo.schema';
import { DynamoService } from './dynamo.service';

@Module({
  imports: [
    DynamooseModule.forFeature([
      { name: 'smart-gardening-v1', schema: DynamoSchema },
    ]),
  ],
  exports: [DynamooseModule],
  controllers: [DynamoController],
  providers: [DynamoService],
})
export class DynamoModule {}
