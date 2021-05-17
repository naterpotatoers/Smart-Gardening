#pragma once
#include "DHT.h"

class TemperatureHumiditySensor : public Sensor
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

    double getHumidity()
    {
        return humidity_;
    };

    double getTemperature()
    {
        return temperature_;
    };

    /// Nicely formatted logging statement
    void print()
    {
        Serial.println(id_ + " temperature: " + temperature_);
        Serial.println(id_ + " humidity: " + humidity_);
    };

private:
    DHT dht;
    double humidity_;
    double temperature_;
};
