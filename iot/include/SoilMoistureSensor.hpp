#pragma once
#include "Analog.hpp"

class SoilMoistureSensor : public Analog
{
public:
    SoilMoistureSensor(String id, int pin)
    {
        id_ = id;
        pin_ = pin;
        value_ = 0;
    }

    /// Grabs the soil moisture levels (wet --> dry, 1750 --> 3580)
    double getSensorData()
    {
        value_ = analogRead(pin_);
        value_ = convertData(value_);
        return value_;
    }

private:
    double convertData(double value)
    {
        if (value)
        {
            double fromLow = 1750;
            double fromHigh = 3580;
            double toLow = 0;
            double toHigh = 100;
            double convertedValue = map(value, fromLow, fromHigh, toHigh, toLow);
            return convertedValue;
        }
        else
            throw "Invalid converData() parameter";
    };
};