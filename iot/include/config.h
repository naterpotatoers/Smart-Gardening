#ifndef CONFIG
#define CONFIG
// ESP32 board config - use pins 15 - 35 as they don't have unexpected behaviors
// Pinouts
const int SDA_PIN = 21;
const int SCL_PIN = 22;
const int SOIL_MOISTURE_PIN = 27;
const int TEMP_HUMIDITY_PIN = 13;
const int WATER_VALVE_PIN = 32;
//Addresses
const int BH1750_I2C_ADDRESS = 0x23;
#endif