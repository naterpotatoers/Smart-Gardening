#include "secrets.h"

#include "SoilMoistureSensor.hpp"
#include "TemperatureHumiditySensor.hpp"
#include "WaterSolenoidValve.hpp"
#include "SunlightIntensitySensor.hpp"

class SmartGardening
{
public:
    SmartGardening(SoilMoistureSensor &soilSensor, TemperatureHumiditySensor &tempHumidSensor, WaterSolenoidValve &waterValve, SunlightIntensitySensor &sunSensor) : soilSensor_(soilSensor), tempHumidSensor_(tempHumidSensor), waterValve_(waterValve), sunSensor_(sunSensor){};

private:
    SoilMoistureSensor &soilSensor_;
    TemperatureHumiditySensor &tempHumidSensor_;
    WaterSolenoidValve &waterValve_;
    SunlightIntensitySensor &sunSensor_;
};