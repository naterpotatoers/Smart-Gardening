#ifndef CONFIG
#define CONFIG
// User info
const char *NODE_ID = "demoNode";
// Pinouts - use pins 15 - 35 as they don't have unexpected behaviors
const int SDA_PIN = 21;
const int SCL_PIN = 22;
const int SOIL_MOISTURE_PIN = 33;
const int TEMP_HUMIDITY_PIN = 13;
const int WATER_VALVE_PIN = 32;
//Addresses
const int BH1750_I2C_ADDRESS = 0x23;
// Endpoints
const char *AWS_PUBLISH_TOPIC = "esp32/pub";
const char *AWS_SUBSCRIBE_TOPIC = "esp32/sub";
// Ports
const int AWS_MQTT_PORT = 8883;
#endif