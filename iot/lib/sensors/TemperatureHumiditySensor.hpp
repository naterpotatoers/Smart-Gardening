#pragma once
#include "DHT.h"

class TemperatureHumiditySensor : public GardenSensor
{
public:
    TemperatureHumiditySensor(String id, int pin)
    {
        id_ = id;
        pin_ = pin;
        dht.setup(pin_);
    };

    /// Grabs the temperature and humidity levels
    void sample()
    {
        humidity_ = dht.getHumidity();
        temperature_ = dht.toFahrenheit(dht.getTemperature());
    };

    /// @return humidity value
    double getHumidity()
    {
        if (isnan(humidity_))
        {
            humidity_ = -999;
        }

        return humidity_;
    };

    /// @return temperature value
    double getTemperature()
    {
        if (isnan(temperature_))
        {
            temperature_ = -999;
        }
        return temperature_;
    };

    /// Nicely formatted logging statement
    void print()
    {
        Serial.println(id_ + " temperature: " + getTemperature());
        Serial.println(id_ + " humidity: " + getHumidity());
    };

private:
    DHT dht;
    double humidity_;
    double temperature_;
};
