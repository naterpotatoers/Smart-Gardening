#include <Arduino.h>
#include <Wire.h>
#include <WiFi.h>
#include <MQTT.h>

#include "config.h"
#include "secrets.h"

#include "GardenSensor.hpp"
#include "Actuator.hpp"
#include "I2CSensor.hpp"

#include "AwsIoTCore.hpp"
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

void setup()
{
  Wire.begin();
  Serial.begin(9600);
  wifiSetup();
  pinMode(LED_BUILTIN, OUTPUT);
  smartGarden.setup();
  awsIoT.setup();
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);
  smartGarden.sample();
  awsIoT.publishMessage("Hello from ESP32!");
  awsIoT.isConnected();
  delay(5000);
  digitalWrite(LED_BUILTIN, LOW);
  smartGarden.print();
  smartGarden.water();
  delay(5000);
}