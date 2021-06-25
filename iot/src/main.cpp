#include <Arduino.h>
#include <Wire.h>
#include <WiFi.h>
#include <MQTT.h>

#include "config.h"
#include "secrets.h"

#include "GardenSensor.hpp"
#include "Actuator.hpp"
#include "I2CSensor.hpp"

#include "AWSIoTCore.hpp"
#include "SoilMoistureSensor.hpp"
#include "TemperatureHumiditySensor.hpp"
#include "WaterSolenoidValve.hpp"
#include "SunlightIntensitySensor.hpp"
#include "SmartGardening.hpp"

AwsIoTCore awsIoT;
SoilMoistureSensor soilSensor("Soil moisture sensor", SOIL_MOISTURE_PIN);
TemperatureHumiditySensor tempHumidSensor("Temperature/humidity sensor", TEMP_HUMIDITY_PIN);
WaterSolenoidValve waterValve("Water solenoid valve", WATER_VALVE_PIN);
SunlightIntensitySensor sunSensor("Sunlight intensity sensor", SDA_PIN, SCL_PIN, BH1750_I2C_ADDRESS);
SmartGardening smartGarden(soilSensor, tempHumidSensor, waterValve, sunSensor);

/// Connects ESP32 to local WiFi network
void wifiSetup()
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.println("Connecting to local Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.print(".");
  }
}

void validateConnection()
{
  while (WiFi.status() != WL_CONNECTED)
  {
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting to ");
    Serial.println(WIFI_SSID);
    delay(1000);
    Serial.print(".");
  }
  if (!awsIoT.isConnected())
  {
    awsIoT.setup();
  }
}

void setup()
{
  Wire.begin();
  Serial.begin(9600);
  wifiSetup();
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);
  smartGarden.setup();
  awsIoT.setup();
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);
  smartGarden.sample();
  validateConnection();
  awsIoT.publishMessage(smartGarden.sensorData());
  smartGarden.print();
  digitalWrite(LED_BUILTIN, LOW);
  delay(1200000);
}