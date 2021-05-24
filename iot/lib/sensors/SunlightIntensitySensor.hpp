#pragma once
#include "BH1750.h"
#include "I2CSensor.hpp"

class SunlightIntensitySensor : public I2CSensor
{
public:
    SunlightIntensitySensor(String id, int sdaPin, int sclPin, byte address)
    {
        id_ = id;
        sdaPin_ = sdaPin;
        sclPin_ = sclPin;
        address_ = address;
    };

    /// Connects sensor to i2c bus
    void begin()
    {
        gy30_.begin();
    }

    /// Grabs the sunlight intensity level
    void sample()
    {
        intensity_ = gy30_.readLightLevel();
    };

    /// Nicely formatted logging statement
    void print()
    {
        Serial.println(id_ + " light intensity: " + intensity_);
    };

    /// @return sunlight intensity valve
    double getIntensity()
    {
        return intensity_;
    }

private:
    BH1750 gy30_;
    double intensity_;
};
