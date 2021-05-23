#include <Arduino.h>
#include <Wire.h>

#include "SmartGardening.hpp"

void setup()
{
  Wire.begin();
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(5000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(5000);
}