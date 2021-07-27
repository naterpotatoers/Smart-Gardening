import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { DynamoController } from './dynamo.controller';
import { UserSchema } from './dynamo.schema';
import { UserService } from './dynamo.service';

@Module({
  imports: [DynamooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  exports: [DynamooseModule],
  controllers: [DynamoController],
  providers: [UserService],
})
export class UserModule {}
