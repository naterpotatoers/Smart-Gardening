#include "secrets.h"

class SmartGardening
{
public:
    SmartGardening(SoilMoistureSensor &soilSensor, TemperatureHumiditySensor &tempHumidSensor, WaterSolenoidValve &waterValve, SunlightIntensitySensor &sunSensor) : soilSensor_(soilSensor), tempHumidSensor_(tempHumidSensor), waterValve_(waterValve), sunSensor_(sunSensor){};

    void begin()
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

    void print()
    {
        soilSensor_.print();
        tempHumidSensor_.print();
        sunSensor_.print();
    }

    void water()
    {
        waterValve_.toggle();
    }

    /// @return a string in JSON format
    String getSampleData()
    {
        return "";
    }

private:
    SoilMoistureSensor &soilSensor_;
    TemperatureHumiditySensor &tempHumidSensor_;
    WaterSolenoidValve &waterValve_;
    SunlightIntensitySensor &sunSensor_;
};