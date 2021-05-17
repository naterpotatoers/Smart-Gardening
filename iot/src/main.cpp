#include <Arduino.h>

#include "Sensor.hpp"
#include "Actuator.hpp"
#include "SoilMoistureSensor.hpp"
#include "TemperatureHumiditySensor.hpp"
#include "WaterSolenoidValve.hpp"

SoilMoistureSensor soilSensor("CSM sensor", 15);
TemperatureHumiditySensor tempHumidSensor("DHT11 sensor", 13);
WaterSolenoidValve waterValve("Water valve", 21);

void setup()
{
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  soilSensor.sample();
  soilSensor.print();

  tempHumidSensor.sample();
  tempHumidSensor.print();

  digitalWrite(LED_BUILTIN, HIGH); // turn the LED on (HIGH is the voltage level)
  waterValve.toggleOn();
  delay(4000);                    // wait for a second
  digitalWrite(LED_BUILTIN, LOW); // turn the LED off by making the voltage LOW
  waterValve.toggleOff();
  delay(4000);
}