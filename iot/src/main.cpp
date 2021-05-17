#include <Arduino.h>
#include <Wire.h>

#include "Sensor.hpp"
#include "Actuator.hpp"
#include "I2CSensor.hpp"
#include "SoilMoistureSensor.hpp"
#include "TemperatureHumiditySensor.hpp"
#include "WaterSolenoidValve.hpp"
#include "SunlightIntensitySensor.hpp"
#include "OLEDScreen.hpp"

SoilMoistureSensor soilSensor("CSM sensor", 15);
TemperatureHumiditySensor tempHumidSensor("DHT11 sensor", 13);
WaterSolenoidValve waterValve("Water valve", 2);
SunlightIntensitySensor sunSensor("GY-30", 21, 22, 0x23);
OLEDScreen oledDisplay("SSD1306", 21, 22, 0x3C);

void setup()
{
  Wire.begin();
  sunSensor.begin();
  oledDisplay.begin();
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  soilSensor.sample();
  soilSensor.print();

  tempHumidSensor.sample();
  tempHumidSensor.print();

  sunSensor.sample();
  sunSensor.print();

  oledDisplay.print();

  digitalWrite(LED_BUILTIN, HIGH);
  waterValve.toggleOn();
  delay(4000);
  digitalWrite(LED_BUILTIN, LOW);
  waterValve.toggleOff();
  delay(4000);
}