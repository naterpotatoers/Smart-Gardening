#include <Arduino.h>

#include "aws.h"
#include "sensor.h"
#include "camera.h"
#include "actuator.h"
#include "secrets.h"

void setup()
{
  aws awsIotCore();
  sensor soilMoistureSensor(0);
  sensor temperatureHumiditySensor(10);
  sensor sunlightIntensitySensor(11);
  camera esp32Cam();
  actuator waterSolenoidValve(19);
  // put your setup code here, to run once:
}

void loop()
{
  // put your main code here, to run repeatedly:
}