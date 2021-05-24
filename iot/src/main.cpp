#include <Arduino.h>
#include <Wire.h>

#include "config.h"
#include "secrets.h"

#include "GardenSensor.hpp"
#include "Actuator.hpp"
#include "I2CSensor.hpp"

#include "SoilMoistureSensor.hpp"
#include "TemperatureHumiditySensor.hpp"
#include "WaterSolenoidValve.hpp"
#include "SunlightIntensitySensor.hpp"
#include "SmartGardening.hpp"

SoilMoistureSensor soilSensor("Soil moisture sensor", SOIL_MOISTURE_PIN);
TemperatureHumiditySensor tempHumidSensor("Temperature/humidity sensor", TEMP_HUMIDITY_PIN);
WaterSolenoidValve waterValve("Water solenoid valve", WATER_VALVE_PIN);
SunlightIntensitySensor sunSensor("Sunlight intensity sensor", SDA_PIN, SCL_PIN, BH1750_I2C_ADDRESS);
SmartGardening smartGarden(soilSensor, tempHumidSensor, waterValve, sunSensor);

void setup()
{
  Wire.begin();
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
  smartGarden.begin();
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);
  smartGarden.sample();
  delay(5000);
  digitalWrite(LED_BUILTIN, LOW);
  smartGarden.print();
  smartGarden.water();
  delay(5000);
}