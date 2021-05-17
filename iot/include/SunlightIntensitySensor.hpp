#pragma once
#include "BH1750.h"

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

    void sample()
    {
        intensity_ = gy30.readLightLevel();
    };

    void print()
    {
        Serial.println(id_ + " light intensity: " + intensity_);
    };

    void begin()
    {
        gy30.begin();
    }

private:
    BH1750 gy30;
    double intensity_;
};
