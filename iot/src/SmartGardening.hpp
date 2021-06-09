#pragma once

#include <ArduinoJson.h>

class SmartGardening
{
public:
    SmartGardening(SoilMoistureSensor &soilSensor, TemperatureHumiditySensor &tempHumidSensor, WaterSolenoidValve &waterValve, SunlightIntensitySensor &sunSensor) : soilSensor_(soilSensor), tempHumidSensor_(tempHumidSensor), waterValve_(waterValve), sunSensor_(sunSensor){};

    void setup()
    {
        sunSensor_.begin();
    }

    /// Samples all the sensors available
    void sample()
    {
        Serial.println("Sampling sensors...");
        soilSensor_.sample();
        tempHumidSensor_.sample();
        sunSensor_.sample();
    }

    /// Nicely formatted logging statement
    void print()
    {
        soilSensor_.print();
        tempHumidSensor_.print();
        sunSensor_.print();
    }

    /// Toggle water solenoid on/off
    void water()
    {
        waterValve_.toggle();
    }

    /// @return all the sensor data in a JSON formatted string
    String sensorData()
    {
        StaticJsonDocument<200> doc;
        doc["message"]["nodeId"] = NODE_ID;
        doc["message"]["sampleTime"] = millis();
        doc["message"]["soilMoisture"] = soilSensor_.getMoisturePercentage();
        doc["message"]["temperature"] = tempHumidSensor_.getTemperature();
        doc["message"]["humidity"] = tempHumidSensor_.getHumidity();
        doc["message"]["sunIntensity"] = sunSensor_.getIntensity();

        char jsonBuffer[512];
        serializeJson(doc, jsonBuffer); // print to client
        Serial.println(jsonBuffer);
        return jsonBuffer;
    }

private:
    SoilMoistureSensor &soilSensor_;
    TemperatureHumiditySensor &tempHumidSensor_;
    WaterSolenoidValve &waterValve_;
    SunlightIntensitySensor &sunSensor_;
};