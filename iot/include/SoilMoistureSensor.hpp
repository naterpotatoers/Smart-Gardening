#pragma once

class SoilMoistureSensor : public Sensor
{
public:
    SoilMoistureSensor(String id, int pin)
    {
        id_ = id;
        pin_ = pin;
    }

    /// Grabs the soil moisture levels
    void sample()
    {
        moisturePercentage_ = convertToPercentage(analogRead(pin_));
    }

    /// @return soil moisture percentage
    double getMoisturePercentage()
    {
        return moisturePercentage_;
    }

    /// Nicely formatted logging statement
    void print()
    {
        Serial.println(id_ + " percentage: " + moisturePercentage_);
    }

private:
    /// Converts moisture reading to percentage (wet --> dry, 1750 --> 3580)
    /// @return converted soil moisture percentage
    double convertToPercentage(double rawValue)
    {
        return map(rawValue, fromLow_, fromHigh_, toHigh_, toLow_);
    };

    double moisturePercentage_;
    double fromLow_ = 1750;
    double fromHigh_ = 3580;
    double toLow_ = 0;
    double toHigh_ = 100;
};