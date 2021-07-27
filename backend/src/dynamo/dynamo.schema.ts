import { Schema } from 'dynamoose';

const DataSchema = new Schema({
  nodeId: {
    type: String,
  },
  soilMoisture: {
    type: Number,
  },
  // humidity: {
  //   type: Number,
  // },
  // temperature: {
  //   type: Number,
  // },
  sunIntensity: {
    type: Number,
  },
});

export const DynamoSchema = new Schema({
  timestamp: {
    type: Number,
  },
  data: DataSchema,
});
