export interface DynamoKey {
  timestamp: string;
}

export interface Dynamo extends DynamoKey {
  data: IoTData;
}

export interface IoTData {
  nodeId: String;
  soilMoisture: Number;
  humidity: Number;
  temperature: Number;
  sunIntensity: Number;
}
