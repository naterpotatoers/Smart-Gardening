#include <Arduino.h>

#include "SoilMoistureSensor.hpp"

SoilMoistureSensor soilMoistureSensor("Soil moisture sensor", 15);

void setup()
{
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  soilMoistureSensor.getSensorData();
  soilMoistureSensor.printValue();

  

  digitalWrite(LED_BUILTIN, HIGH); // turn the LED on (HIGH is the voltage level)
  delay(4000);                     // wait for a second
  digitalWrite(LED_BUILTIN, LOW);  // turn the LED off by making the voltage LOW
  delay(4000);
}